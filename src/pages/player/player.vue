<template>
    <div class="player">
        <audio src="" id="audio" autoplay style="display:none"></audio>
        <player-header></player-header>
        <player-core></player-core>
    </div>
</template>

<script>
import PlayerHeader from 'components/playerHeader/playerHeader'
import PlayerCore from 'components/playerCore/playerCore'
export default {
    name:'player',
    components:{
        PlayerHeader,
        PlayerCore
    }
}
</script>

<style lang="stylus" scoped>

</style>
