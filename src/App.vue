<template>
    <div class="container">
        <h1>Hello Bootstrap</h1>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary">{{ message }}</button>
            </div>
            <div class="col-sm">
                <i class="fas fa-ice-cream display-1 text-primary"></i>
                <i class="fa-solid fa-car display-2 text-danger"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello Vue!"
        };
    }
};
</script>

<style></style>
