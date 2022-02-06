<!-- prettier-ignore-start -->
# Production & Front-end


## Briques techniques à connaître


### Serveur Http
<img class="r-stretch" src="data/img/serveurHttp.png" />

Note:
Quelques exemples :
- Apache httpd
- Back-end for front-end


### Reverse-proxy
<img class="r-stretch" src="data/img/reverse-proxy-flow.svg" />


### Reverse-proxy
- Sécurité :
    - Seul point d'entrée / sortie du traffic
    - Chiffre / Déchiffre
- Performance :
    - Mise en cache
    - Compression


### Load-balancer
<img class="r-stretch" src="data/img/loadBalancer.webp" />


### Load-balancer
- Positionné devant des serveurs assurant la même fonctionnalité
- Distribue le traffic en fonction de la charge
- Persistence de session
- Health-check des différents serveurs


### Reverse-proxy vs Load-balancer ?

Note:
https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/


### API Gateway
- Reverse-proxy + d'autres fonctionnalités liés aux API
    - Orchestration de services
    - Pattern de résilience : Circuit Breaker, Retry ...
    - Authentification
    - Observabilité
    - Gestion du traffic
Note:
https://github.com/Kong/kong
https://maif.github.io/otoroshi/


### CDN
<img class="r-stretch" src="data/img/CDN.png" />


### WAF : Web Application Firewall
<img class="r-stretch" src="data/img/firewall.png" />


## Front-end & Cloud
<img class="r-stretch" src="data/img/cloudServicesTypes.png" />


## En quoi le cloud impact mon application front-end ?

Note:
- Cohabitation Cloud et On premise parfois difficile


## Observabilité et peformance
- Produits : Dynatrace, Elasticstack, Grafana, Sentry ...
- Tests de charges
- Outils de dev: Lighthouse ...


## Analytics, outils et respect de la confidentialité
- Outils : Google analytics, Contentsquare ...
- RGPD
- Consentement
- Cookie


## A/B testing
<img class="r-stretch" src="data/img/abtesting.png" />


## Feature flipping
<img class="r-stretch" src="data/img/featureFlag.jpeg" />

Note:
https://maif.github.io/izanami/
https://maif.github.io/



# The end
<!-- prettier-ignore-end -->
