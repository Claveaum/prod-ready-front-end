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
    - Encrypte / décrypte
- Performance :
    - Mise en cache
    - Compression


### Load-balancer
<img class="r-stretch" src="data/img/loadBalancer.webp" />


### Load-balancer
- Positionné devant des serveurs assurant la même fonctionnalité
- Distribue le traffic en fonction de la charge
- Persistence de session
- Health-check des différents serveur


### Reverse-proxy vs Load-balancer ?

Note:
https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/


### API Gateway
- Reverse-proxy + d'autres fonctionnalités liés aux API
    - Orchestration de services
    - Pattern de resillience : Circuit Breaker, Retry ...
    - Authentification
    - Observabilité
    - Gestion du traffic
Note:
https://github.com/Kong/kong


### CDN
<img class="r-stretch" src="data/img/CDN.png" />


### WAF : Web Application Firewall
<img class="r-stretch" src="data/img/firewall.png" />


## Front-end & Cloud
- Transition vers le cloud
    - Trouver le bon cloud IASS,PASS,SASS ..
- Cohabitation Cloud et On premise
- Intérêt ?


## Mise en cache des ressources statiques / CDN
- Principe
- Intérêt -> performance


## Monitoring
- Alerting : Dynatrace, Grafana, Sentry
- Amélioration continue
- Performance: Lighthouse ...


## Plan de marquage / Analytics
- Intérets
- Quelques outils : Google analytics, tagcommander etc ..
    - Utilité vs problématique de vie privée
- Intégration dans une application React
- RGPD
- Consentement
- Cookie


## A/B testing
- Intérêt


## Feature flipping
- Intérêt
- Limites: ne pas oublier de décommissionner 

<!-- prettier-ignore-end -->
