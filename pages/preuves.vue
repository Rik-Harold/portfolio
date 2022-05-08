<template>
    <div>
        <!-- Nav barre -->
        <Header />

        <!-- home section start -->
        <transition name="apparition">
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content special">
                        <div class="text-2">Situations professionnelles</div>
                    </div>
                </div>
            </section>
        </transition>

        <!-- services section start -->
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title title-projets">Preuves techniques</h2>

                <!-- Barre de recherche -->
                <div class="searchBar">
                    <div class="search">
                        <input type="text" name="search" id="search" class="saisie" v-model="saisie" placeholder="Rechercher une preuve technique">
                    </div>
                </div>

                <!-- Contenu des preuves -->
                <div class="serv-content">
                    <div class="card h-100" v-for="(preuve, index) in tri" :key="index" >
                        <div class="box">
                            <div class="text nameSituation">{{ preuve.name }}</div>
                            <p>{{ preuve.description }}</p>
                            <a class="viewDoc" :href="preuve.document" target="_blank">Voir le document</a>
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
            saisie: '',
            situations: [
                {
                    name: 'Identification des ressources numériques',
                    description: 'Recencement trié des équipements informatiques d\'un réseau informatique.',
                    document: 'inventaire.pdf'
                },
                {
                    name: 'Assistance et gestion d\'incidents',
                    description: 'Mise en place d\'un système de tiketing pour répondre aux besoins des clients.',
                    document: 'gestion_incident.pdf'
                },
                {
                    name: 'Projet de gestion d\'incidents',
                    description: 'Atelier en cours pour la résolution d\'incidents avec mise en situation réelle.',
                    document: 'ticketing.pdf'
                },
                {
                    name: 'Objectifs et modalités d\'un projet',
                    description: 'Utilisation de l\'outil GANTT PROJECT pour la répartition des tâches, le suivi et l\'analyse du projet de l\'application web.',
                    document: 'analyse_objectifs_modalites_projets.pdf'
                },
                {
                    name: 'Planifier les activités',
                    description: 'Utilisation de l\'outil GANTT PROJECT pour la répartition des tâches, le suivi et l\'analyse des projets.',
                    document: 'planifier_les_activites.pdf'
                },
                {
                    name: 'Indicateurs de suivi d\'un projet',
                    description: 'Utilisation de l\'outil GANTT PROJECT pour la répartition des tâches, le suivi et l\'analyse du projet de l\'application mobile.',
                    document: 'indicateur_suivi_projet.pdf'
                },
                {
                    name: 'Tests d\'intégration de services',
                    description: 'Tests pour évaluer la performance des applications développées et leur acceptation.',
                    document: 'tests_integration.pdf'
                },
                {
                    name: 'Valorisation de l\'image de l\'organisation',
                    description: 'Site web de l\'entreprise WEBMANA présentant son identité numérique.',
                    document: 'valorisation_image_entreprise.pdf'
                },
                {
                    name: 'Sauvegarde et restauration',
                    description: 'Mise en place de service de sauvegarde et de restauration opérationnelles.',
                    document: 'sauvegarde_restauration_bash.pdf'
                },
                {
                    name: 'Déployement de services',
                    description: 'Déployement de services développés sur un serveur afin de gérer leur mise à jour',
                    document: 'deployer_un_service.pdf'
                },
                {
                    name: 'Réference des services de l\'entreprise',
                    description: 'Présentation des différents services et visibilité sur les réseaux sociaux.',
                    document: 'services_entreprise.pdf'
                },
                {
                    name: 'Mise en ligne de services',
                    description: 'Mise en ligne de projets en utilisant des outils comme GIT pour rendre disponible les projets en ligne.',
                    document: 'mise_en_ligne_service.pdf'
                },
                {
                    name: 'Accompagnement des utilisateurs d\'un service',
                    description: 'Formation des utilisateurs à l\'usage du service mis à leur disposition.',
                    document: 'accompagnement_utilisateur_mise_en_place_service.pdf'
                },
                {
                    name: 'Environnement d\'apprentissage personnel',
                    description: 'Tutos d\'apprentissage de concepts informatiques.',
                    document: 'environnement_apprentissage.pdf'
                },
                {
                    name: 'Gestion d\'identitié professionnelle',
                    description: 'Profil professionnel en ligne mettant en avant mon Curriculum Vitae et mes compétences professionnelles.',
                    document: 'identite_pro.pdf'
                },
                {
                    name: 'Documentation Vue JS',
                    description: 'La réalisation d\'une documentation sur l\'utilisation de Vue.js était une de mes tâches de stage',
                    document: 'doc_vuejs.pdf'
                },
                {
                    name: 'Développement du projet professionnel',
                    description: 'Perspectives d\'évolution après le BTS notamment dans les formations de Data Scientist',
                    document: 'projet_pro.pdf'
                },
                {
                    name: 'Documentation Git',
                    description: 'La réalisation d\'une documentation sur l\'utilisation de GIT était une de mes tâches de stage',
                    document: 'doc_git.pdf'
                }
            ]
        }
    },
    computed: {
        // Fonction de recherche de preuves techniques
        tri ()
        {
            if (this.saisie === '')
            {
                return this.situations
            }else
            {
                const situations = this.situations.filter(preuve => {
                    return preuve.name.toLowerCase().includes(this.saisie.toLowerCase())
                })
                return situations
            }
        }
    }
}
</script>

<style scoped>
</style>