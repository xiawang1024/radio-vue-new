<template>
    <div class="player">
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
    height 1920px
    box-sizing border-box
    overflow hidden
</style>
