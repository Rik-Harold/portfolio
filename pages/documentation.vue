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
                <h2 class="title title-projets" id="ap">Ateliers Professionnels</h2>
                <div class="serv-content">
                    <div v-for="(projet, index) in ap" :key="index" class="card" @mouseleave="projet.openDetail = false">
                        <div class="box">
                            <div class="text">AP {{ index + 1 }}</div>
                            <p>{{ projet.titre }}</p>
                            <a class="viewDoc" :href="projet.lien" target="_blank">Consulter</a>
                            
                            <div class="details">
                                <button class="viewDoc dropdown-toggle" type="button" @click="projet.openDetail = !projet.openDetail">
                                    Plus de documents
                                </button>
                                <ul v-show="projet.openDetail" class="listeDetails w-100">
                                    <li v-for="(detail, index) in projet.details" :key="index" class="w-100" ><a class="dropdown-item" :href="detail.lien" target="_blank"> {{ detail.name }} </a></li>
                                </ul>
                            </div>
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
                    <div v-for="(stage, index) in stages" :key="index" class="card" @mouseleave="stage.openDetail = false">
                        <div class="box">
                            <div class="text">{{ stage.titre }}</div>
                            <p>{{ stage.description }}</p>
                            
                            <div class="details">
                                <button class="viewDoc dropdown-toggle" type="button" @click="stage.openDetail = !stage.openDetail">
                                    Détails
                                </button>
                                <ul v-show="stage.openDetail" class="listeDetails w-100">
                                    <li v-for="(detail, index) in stage.details" :key="index" ><a class="dropdown-item" :href="detail.lien" target="_blank"> {{ detail.name }} </a></li>
                                </ul>
                            </div>
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
            openDetails: false,
            ap: [
                {
                    titre: 'Création et présentation de l\'entreprise virtuelle "WEBMANA" spécialisée dans la conception de solutions web et mobiles.',
                    openDetail: false,
                    details: [
                        {
                            name: 'Devis',
                            lien: '/ap1/devis.pdf'
                        },
                        {
                            name: 'Facture',
                            lien: '/ap1/facture.pdf'
                        },
                        {
                            name: 'Fiche de postes',
                            lien: '/ap1/fiche_poste.pdf'
                        },
                        {
                            name: 'Extrait de Kbis',
                            lien: '/ap1/kbis_extrait.pdf'
                        },
                        {
                            name: 'Statuts de l\'entreprise',
                            lien: '/ap1/statuts.pdf'
                        },
                        {
                            name: 'Stratégies marketing',
                            lien: '/ap1/strategie_marketing.pdf'
                        },
                    ],
                    lien: '/ap1/presentation.pdf'
                },
                {
                    titre: 'Prise en charge de problématiques formulées par la Maison des Ligues de Lorraines pour la réalisation d\'un site web et d\'une application mobile.',
                    openDetail: false,
                    details: [
                        {
                            name: 'Devis application',
                            lien: '/ap2/devis_application.pdf'
                        },
                        {
                            name: 'Devis site',
                            lien: '/ap2/devis_site.pdf'
                        },
                        {
                            name: 'Diagramme de process (site)',
                            lien: '/ap2/diagramme_process_site.pdf'
                        },
                        {
                            name: 'Diagramme de process (application)',
                            lien: '/ap2/diagramme_process_application.pdf'
                        },
                        {
                            name: 'Gantt application',
                            lien: '/ap2/gantt_application.pdf'
                        },
                        {
                            name: 'Gantt site',
                            lien: '/ap2/gantt_site.pdf'
                        },
                        {
                            name: 'Problématiques',
                            lien: '/ap2/problematiques.pdf'
                        },
                        {
                            name: 'Schémas conceptuels',
                            lien: '/ap2/schema_conceptuels.pdf'
                        },
                        {
                            name: 'Use case (application)',
                            lien: '/ap2/use_case_application.pdf'
                        },
                        {
                            name: 'Use case (site)',
                            lien: '/ap2/use_case_site.pdf'
                        }
                    ],
                    lien: '/ap2/presentation.pdf'
                },
                {
                    titre: 'Création et mise à disposition de la M2L d\'un site web dédié à la gestion des bordereaux de fiches de frais aux adhérents des ligues.',
                    openDetail: false,
                    details: [
                        {
                            name: 'Documentation',
                            lien: '/ap3/documentation'
                        },
                        {
                            name: 'Présentation',
                            lien: '#'
                        }
                    ],
                    lien: '/ap3/presentation.pdf'
                },
                {
                    titre: 'Développement d\'une application mobile de réservation de salles ouverte au public et en lien avec le site web de la M2L à travers une API REST.',
                    openDetail: false,
                    details: [
                        {
                            name: 'Documentation',
                            lien: '#'
                        },
                        {
                            name: 'Présentation',
                            lien: '#'
                        }
                    ],
                    lien: '#'
                }
            ],
            stages: [
                {
                    titre: 'Stage 1ère année',
                    description: 'Au cours de ma première année d\'études, j\'ai eu à effectuer un stage de 5 semaines en tant que développeur afin de développer un site web de Gym.',
                    openDetail: false,
                    details: [
                        {
                            name: 'Attestation de stage',
                            lien: '/attestation_de_stage_2021.pdf'
                        },
                        {
                            name: 'Rapport de stage',
                            lien: '#'
                        }
                    ]
                },
                {
                    titre: 'Stage 2e année',
                    description: 'Pour renforcer mes compétences, un second stage en 2e année m\'a permis de découvrir de nouveaux langages et framework dont j\'ai pu rédiger leur documentation.',
                    openDetail: false,
                    details: [
                        {
                            name: 'Attestation de stage',
                            lien: '#'
                        },
                        {
                            name: 'Rapport de stage',
                            lien: '#'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.details
{
    display: flex;
    justify-content: center;
}
.listeDetails
{
    display: block;
    position: absolute;
    bottom: 20%;
    left: 0%;
    background: #ffffff;
    list-style: none;
    border-radius: 10px;
}
.listeDetails .dropdown-item
{
    padding: 0.25rem 0rem;
}
</style>