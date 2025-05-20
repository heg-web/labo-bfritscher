<template>
    <div>
        <div v-for="m in messages" :key="m['.key']">{{ m.txt }} <button @click="remove(m)">X</button></div>
        <input v-model="newMsg" /><button @click="send">send</button>
    </div>
</template>
<script>
import firebase from "@/plugins/firebase";
const $firebaseRefs = {
    messages: firebase.database().ref("/demo/messages")
};
export default {
    data() {
        return {
            newMsg: "",
            messages: []
        };
    },
    mounted() {
        $firebaseRefs.messages.on("value", this.updateMessages);
    },
    unmounted() {
        $firebaseRefs.messages.off("value", this.updateMessages);
    },
    methods: {
        updateMessages(snapshot) {
            const items = snapshot.val();
            this.messages = Object.keys(items).map((key) => {
                return {
                    ".key": key,
                    ...items[key]
                };
            });
        },
        send() {
            $firebaseRefs.messages.push({ txt: this.newMsg });
            this.newMsg = "";
        },
        remove(p) {
            $firebaseRefs.messages.child(p[".key"]).remove();
        }
    }
};
</script>
