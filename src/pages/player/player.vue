<template>
    <div class="player">
        <audio src="http://lhttp.qingting.fm/live/5022452/64k.mp3" id="audio" autoplay style="display:none"></audio>
        <player-header></player-header>
        <player-core></player-core>
        <player-footer></player-footer>
    </div>
</template>

<script>
import PlayerHeader from 'components/playerHeader/playerHeader'
import PlayerCore from 'components/playerCore/playerCore'
import PlayerFooter from 'components/playerFooter/playerFooter'
export default {
    name:'player',
    components:{
        PlayerHeader,
        PlayerCore,
        PlayerFooter
    }
}
</script>

<style lang="stylus" scoped>
.player
    position relative
</style>
