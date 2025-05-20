<template>
    <div>
        <div class="game">
            <input type="color" v-model="color" />
            <input type="range" min="1" max="30" v-model.number="size" />
            {{ size }}
            <div v-for="i in size" class="row" :key="i">
                <div
                    class="box"
                    v-for="j in size"
                    @click="draw(i, j)"
                    :style="{ 'background-color': cellColor(i, j) }"
                    :key="`${i}_${j}`"
                ></div>
            </div>
            <button class="red" @click="clear">clear</button>
        </div>
    </div>
</template>

<script>
import firebase from "@/plugins/firebase";
const $firebaseRefs = {
    game: firebase.database().ref("/game")
};

export default {
    data() {
        return {
            color: "#2196f3",
            size: 10,
            game: {}
        };
    },
    mounted() {
        $firebaseRefs.game.on("value", this.updateGame);
    },
    unmounted() {
        $firebaseRefs.game.off("value", this.updateGame);
    },
    methods: {
        draw(i, j) {
            $firebaseRefs.game.child(`${i}-${j}`).set(this.color);
        },
        cellColor(i, j) {
            return this.game[`${i}-${j}`] || "#fff";
        },
        clear() {
            $firebaseRefs.game.remove();
        },
        updateGame(snapshot) {
            this.game = snapshot.val();
        }
    }
};
</script>

<style>
.game {
    display: inline-block;
}
.box {
    float: left;
    width: 30px;
    height: 30px;
    border: 0.5px dashed #cecece;
}
.row {
    clear: both;
    max-width: 1244px;
    margin: 0 auto;
}
.red {
    background-color: red;
    color: #fff;
}
</style>
