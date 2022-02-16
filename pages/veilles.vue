<template>
    <div>
        <!-- home section start -->
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content special">
                    <div class="text-2">Veilles juridique et technologiques</div>
                </div>
            </div>
        </section>

        <div class="slideVeille">
            <!-- Slide de veilles -->
            <div class="max-width">
                <div class="slide">
                    <div class="juridique veilleHover" @click="slideComponentJuri">
                        <div class="text-2">Veille</div>
                        <div class="text-2">juridique</div>
                    </div>
                    <div class="technologique veilleHover" @click="slideComponentTechno">
                        <div class="text-2">Veilles</div>
                        <div class="text-2">technologiques</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu des veilles -->
        <component :is='nameComposant'></component>
    </div>
</template>

<script>
    // Importation des composants
    import VeilleJuridique from '@/components/VeilleJuridique.vue'
    import VeillesTechnologiques from '@/components/VeillesTechnologiques.vue'

    // Traitements
    export default {
        // layout: 'navBarre',
        components: {
            VeilleJuridique,
            VeillesTechnologiques
        },
        data() {
            return {
                nameComposant: 'VeilleJuridique',
                // veilleActive: {
                //     backgroundColor: 'rgb(220, 20, 60)',
                //     color: '#fff'
                // },
                // veilleDesactive: {
                //     backgroundColor: '#fff',
                //     color: 'rgb(220, 20, 60)'
                // },
                veilleActive: 'veilleActive',
                veilleDesactive: 'veilleDesactive',
                actif1: true,
                actif2: false
            }
        },
        methods: {
            slideComponentJuri () {
                 this.nameComposant = 'VeilleJuridique'
                this.actif1 = true
                this.actif2 = false
            },
            slideComponentTechno () {
                 this.nameComposant = 'VeillesTechnologiques'
                this.actif1 = false
                this.actif2 = true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>