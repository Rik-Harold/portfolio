<template>
    <div>
        <!-- Nav barre -->
        <Header />

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
                    <div class="juridique veilleHover" @click="slideComponentJuri" :class="{ veilleActive: actif1 }">
                        <div class="text-2">Veille</div>
                        <div class="text-2">juridique</div>
                    </div>
                    <div class="technologique veilleHover" @click="slideComponentTechno" :class="{ veilleActive: actif2 }">
                        <div class="text-2">Veilles</div>
                        <div class="text-2">technologiques</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu des veilles -->
        <transition name="fade">
            <component :is='nameComposant'></component>
        </transition>
        
        <!-- Pied de page -->
        <Footer />
    </div>
</template>

<script>
// Importation des composants
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import VeilleJuridique from '@/components/VeilleJuridique.vue'
import VeillesTechnologiques from '@/components/VeillesTechnologiques.vue'

// Traitements
export default {
    // layout: 'model',
    components: {
        Header,
        VeilleJuridique,
        VeillesTechnologiques,
        Footer
    },
    data() {
        return {
            nameComposant: 'VeilleJuridique',
            veilleActive: 'veilleActive',
            veilleDesactive: 'veilleDesactive',
            actif1: true,
            actif2: false
        }
    },
    methods: {
        // Affichage du composant de veille juridique et style du bouton
        slideComponentJuri () {
            this.nameComposant = 'VeilleJuridique'
            this.actif1 = true
            this.actif2 = false
        },
        // Affichage du composant de veilles technologiques et style du bouton
        slideComponentTechno () {
            this.nameComposant = 'VeillesTechnologiques'
            this.actif1 = false
            this.actif2 = true
        }
    }
}
</script>

<style scoped>
.affiche-enter{
  transform: translateY(500px);
}
.affiche-enter-active {
  transition: transform 1s cubic-bezier(1.0, 0.5, 0.8, 1.0), color .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.affiche-leave-active {
  transition: opacity .2s;
}
.affiche-leave-to{
  opacity: 0;
}
.fade-enter{
  transform: translateY(500px);
}
.fade-enter-active {
  transition: transform 1s cubic-bezier(1.0, 0.5, 0.8, 1.0), color .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-active {
  transition: opacity .2s;
}
.fade-leave-to{
  opacity: 0;
}
</style>