<template>
    <div>
        <!-- Nav barre -->
        <Header />

        <!-- home section start -->
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content special">
                    <div class="text-2">Documentation</div>
                    <a class="lien" href="Tableau_de_synthese.pdf" target="_blank">Tableau de sythèse</a>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title title-projets" id="ppe">Ateliers Professionnels</h2>
                <div class="serv-content">
                    <div v-for="(projet, index) in ap" :key="index" class="card" id="ap">
                        <div class="box">
                            <div class="text">AP {{ index + 1 }}</div>
                            <p>{{ projet.titre }}</p>
                            <a class="viewDoc" :href="projet.lien" target="_blank">Détails</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title title-projets" id="stage">Stages de formation</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <div class="text">Stage 1ère année</div>
                            <p>Au cours de ma première année d'études, j'ai eu à effectuer un stage de 5 semaines en tant que développeur afin de développer un site web de Gym.</p>
                            <a class="viewDoc" href="#">Rapport de stage</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <div class="text">Stage 2e année</div>
                            <p>Pour renforcer mes compétences, un second stage en 2e année m'a permis de découvrir de nouveaux langages et framework dont j'ai pu rédiger leur documentation.</p>
                            <a class="viewDoc" href="#">Rapport de stage</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Pied de page -->
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    // layout: 'model',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            ap: [
                {
                    titre: 'Création et présentation de l\'entreprise virtuelle "WEBMANA" spécialisée dans la conception de solutions web et mobiles.',
                    lien: 'ap1_doc.pdf'
                },
                {
                    titre: 'Prise en charge de problématiques formulées par la Maison des Ligues de Lorraines pour la réalisation d\'un site web et d\'une application mobile.',
                    lien: 'ap2_doc.pdf'
                },
                {
                    titre: 'Création et mise à disposition de la M2L d\'un site web dédié à la gestion des bordereaux de fiches de frais aux adhérents des ligues.',
                    lien: '#'
                },
                {
                    titre: 'Développement d\'une application mobile de réservation de salles ouverte au public et en lien avec le site web de la M2L à travers une API REST.',
                    lien: '#'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>