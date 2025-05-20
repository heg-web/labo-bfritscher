<template>
    <div>
        <section v-show="!userAuth" id="firebaseui-auth-container"></section>
        <div v-if="userAuth && userData">
            <h3><img :src="userAuth.photoURL" /> {{ userData.displayName }}</h3>
            <input type="color" v-model="userData.color" @change="saveUserData" />
            <button @click="logout()">logout</button>
        </div>
    </div>
</template>

<script>
import firebase from "@/plugins/firebase";
import * as firebaseui from "firebaseui";
import { default as firebaseConfig } from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";

export default {
    data() {
        return {
            userAuth: null,
            userData: {}
        };
    },
    created() {
        // On écoute tout changement d'authentficiation de firebase
        // firebase va essayer d'automatiquement reauthentifier un user au chargement.
        // https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
        //
        // Idéalement on mets se code dans l'instance vue main.js
        firebase.auth().onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // login
                this.userAuth = userAuth;

                // Si on veut on peut utiliser l'uid du user authentifié pour créer
                // ou connecter une version user de notre base de données.
                firebase // référence firebase realtime database
                    .database()
                    .ref("/users")
                    .child(this.userAuth.uid)
                    .once("value", (snapshot) => {
                        this.userData = snapshot.val() || {};
                        // La connection est établie on peut maintenant utiliser this.userData
                        // on met à jour notre userData dans la base de données avec les infos du profile authentifié
                        // les variables disponibles dépendes du AuthProvider.
                        // https://firebase.google.com/docs/reference/js/firebase.User.html
                        this.userData.displayName = userAuth.displayName;
                        this.userData.uid = userAuth.uid;
                        this.saveUserData();
                    });
            } else {
                // logout
                this.userAuth = null;
            }
        });
    },
    mounted() {
        // Chargement du formulaire d'authentification
        // https://github.com/firebase/firebaseui-web#using-firebaseui-for-authentication
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        const uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebaseConfig.auth.GithubAuthProvider.PROVIDER_ID,
                firebaseConfig.auth.FacebookAuthProvider.PROVIDER_ID,
                firebaseConfig.auth.GoogleAuthProvider.PROVIDER_ID,
                firebaseConfig.auth.EmailAuthProvider.PROVIDER_ID,
                {
                    provider: "oidc.eduid",
                    providerName: "Switch EDUID",
                    // To customize the full label:
                    // fullLabel: 'ACME Portal',
                    buttonColor: "#1f2e61",
                    iconUrl:
                        "https://help.switch.ch/export/sites/help/eduid/docs/services/design-guideline/images/eduid-small.png"
                }
            ],
            callbacks: {
                signInSuccessWithAuthResult() {
                    return false;
                }
            }
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    },
    methods: {
        // exemple de sauvegarde de données dans firebase
        saveUserData() {
            // variante native de l'api firebase
            // https://firebase.google.com/docs/database/web/read-and-write
            firebase.database().ref("/users").child(this.userAuth.uid).set(this.userData);
        },
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    if (this.$route.path !== "/login") {
                        this.$router.push("/login");
                    } else {
                        // recharger la page pour afficher le composant login
                        this.$router.go(0);
                    }
                });
        }
    }
};
</script>
<style scoped>
h3 img {
    width: 32px;
}
</style>
