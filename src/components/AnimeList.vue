<template>
    <div class="anime">
        <h1>{{ header }}</h1>
        <ul>
            <li v-for="listItem in lists" :key="listItem.id">
                {{ listItem.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AnimeList',
    props: {
        header: String,
        lists: Array,
    }
}
</script>

<style scoped>

</style>
