<template>
    <div>
        <!-- services section start -->
        <section class="skills veilleDark" id="skills">
            <div class="max-width">
                <h2 class="titleVeille">Mes veilles technologiques</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Qu'est-ce que la veille technologique ?</div>
                        <p>La veille technologique permet d’avoir une vue complète sur un marché et ses évolutions d’un point de vue « technique » 
                            : technologies mises en œuvre par les clients, les fournisseurs, les partenaires et les concurrents ainsi que les évolutions 
                            autour des technologies émergentes.</p>
                        <!-- <a href="#">Outils de veilles technologiques</a> -->
                    </div>
                    <div class="column right2">
                        <div class="text">Mise en place d'une veille technologique</div>
                        <p>Mettre en œuvre une veille technologique consiste à effectuer des recherches ciblées sur des domaines importants, 
                            sur des entreprises-clés ou sur des secteurs couverts. Lister ses besoins et mettre en place un plan de collecte 
                            est la première étape de tout type de projet de veille.</p>
                    </div>
                </div>
                <div id="voirVeille">
                    <a class="viewDetails" target="_blank" href="veille_informationnelle.pdf">Outils de veilles technologiques</a>
                </div>
            </div>
        </section>

        <!-- skills section start veilleDark -->
        <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="titleVeille">Mes sujets de veille technologique</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Le Big Data, c'est quoi ?</div>
                        <p>Littéralement, ces termes signifient mégadonnées, grosses données ou encore données massives. Ils désignent un ensemble 
                            très volumineux de données qu’aucun outil classique de gestion de base de données ou de gestion de l’information ne peut 
                            vraiment travailler. Ce sont les informations provenant de partout : messages que nous nous envoyons, vidéos que nous 
                            publions, enregistrements transactionnels d’achats en ligne et bien d’autres encore. 
                            Ces données sont baptisées <i>Big Data</i> ou volumes massifs de données.</p>
                    </div>
                    <div class="column right2">
                        <div class="text">Qu'est-ce que la Blockchain ?</div>
                        <p>Il s'agit, comme son nom l'indique, d'une "chaîne de blocs" dont chacun des maillons représente une zone de stockage d'information. 
                            Complètement transparente et décentralisée, cette base de données contient l'ensemble des échanges effectués par les utilisateurs, 
                            eux-même garants de la stabilité des opérations. Si quelqu'un tente de falcifier une information, la chaîne se rompt. La technologie 
                            est ainsi réputée pour être inviolable.</p>
                    </div>
                </div>
                <div id="voirVeille">
                    <a class="viewDetails" target="_blank" href="blockchain.pdf">Découvrir la blochain</a>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="skills veilleDark" id="skills">
            <div class="max-width">
                <!-- Titre de l'actualité -->
                <h2 class="titleVeille">Quelques actualités</h2>

                <!-- ACTUALITE SUR LE BIG DATA -->
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Actualité 1</div>
                        <p class="actuVeille">Transformation Digitale Dans La Banque, Les Services Financiers Et L’assurance</p>
                        <p>Market.biz fournit une évaluation détaillée du marché mondial de Transformation digitale dans la Banque, les Services Financiers et l’Assurance avec des estimations et des prévisions précises...</p>
                        <a class="lien" href="https://xiaomiactu.com/transformation-digitale-dans-la-banque-les-services-financiers-et-lassurance-croissance-de-lenquete-recente-sur-le-marche-2030/" target="_blank">Lire plus</a>
                    </div>
                    <div class="column right2">
                        <div class="text">Actualité 2</div>
                        <p class="actuVeille">Plateforme de médias sociaux décentralisés basés sur la blockchain</p>
                        <p>Le rapport présente une estimation qualitative et des détails détaillés de leurs statistiques réalistes à l’échelle mondiale. Les données Plateforme de médias sociaux décentralisés...</p>
                        <a class="lien" href="https://jeunesexpress.ca/uncategorized/349622/plateforme-de-medias-sociaux-decentralises-bases-sur-la-blockchain-marche-analyse-de-la-demande-et-des-informations-2022-2028/" target="_blank">Lire plus</a>
                    </div>
                </div>

                <!-- Petit espacement de 30 pixels -->
                <div class="espaceDark"></div>
                
                <!-- ACTUALITE SUR LA BLOCKCHAIN -->
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Actualité 3</div>
                        <p class="actuVeille">Marché mondial des logiciels de Big Data</p>
                        <p>Le rapport de recherche sur le marché Logiciel de mégadonnées fournit des informations qualitatives et quantitatives sur les principaux moteurs, contraintes...</p>
                        <a href="http://millaujournal.com/2022/05/08/marche-mondial-des-logiciels-de-big-data-avec-les-tendances-emergentes-2022-mises-a-jour-des-principaux-acteurs-strategies-de-croissance-des-entreprises-dynamique-concurrentielle-segmentatio/">Lire plus</a>
                    </div>
                    <div class="column right2">
                        <div class="text">Actualité 4</div>
                        <p class="actuVeille">THORChain (RUNE), la blockchain qui réinvente les exchanges décentralisés</p>
                        <p>THORChain (RUNE) est une blockchain basée sur l'infrastructure Cosmos avec pour objectif de proposer un socle commun aux exchanges décentralisés (DEX) cross-chain.</p>
                        <a href="https://cryptoast.fr/thorchain-rune-blockchain-reinvente-exchanges-decentralises-dex/" target="_blank">Lire plus</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'VeillesTechnologiques'
    }
</script>

<style scoped>
.details
{
    display: flex;
    justify-content: center;
}
#voirVeille
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.actuVeille
{
    color: brown;
    font-size: 1.2rem;
}
</style>