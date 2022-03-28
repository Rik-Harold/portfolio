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
                <h2 class="title title-projets" id="ppe">Projets Personnels Encadrés</h2>
                <div class="serv-content">
                    <div v-for="(projet, index) in ap" :key="index" class="card">
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
                <h2 class="title title-projets" id="stage">Stage de formation</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <div class="text">Stage 1ère année</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                            <a class="viewDoc" href="#">Rapport de stage</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <div class="text">Stage 2e année</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                            <a class="viewDoc" href="#">Rapport de stage</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    // layout: 'model',
    components: {
        Header
    },
    data() {
        return {
            ap: [
                {
                    titre: 'Identité de l\'entreprise Webmana et présence en ligne.',
                    lien: 'ap1_doc.pdf'
                },
                {
                    titre: 'Problématiques et préparation des projets web et mobile de la M2L',
                    lien: 'ap2_doc.pdf'
                },
                {
                    titre: 'Création d\'une application web pour la gestion de borbdereaux de la M2L',
                    lien: '#'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>