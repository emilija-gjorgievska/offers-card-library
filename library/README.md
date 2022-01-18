# ngx-offers-card-gjorgievska-emilija

Angular library for displaying offers card.

<br>

## Installation

---

<br>

npm install ngx-offers-card-gjorgievska-emilija   

<br>

## Usage

---

<br>

1. Import `NgxOffersCardGjorgievskaEmilijaModule` module in your application.


```typescript 
import { NgxOffersCardGjorgievskaEmilijaModule } from 'ngx-offers-card-gjorgievska-emilija';


@NgModule({
  imports: [
    NgxOffersCardGjorgievskaEmilijaModule
  ]
})

```

2. Use `<lib-ngx-offers-card-gjorgievska-emilija> </lib-ngx-offers-card-gjorgievska-emilija>` in your HTML template and pass values for the following input properties:
* name : string
* logo : string
* rating : number (aggregated rating)
* depositBonusTitle : string
* depositBonusDescription : string
* coinsTitle : string
* coinsValue : string
* buttonText : string
* websiteLink : string