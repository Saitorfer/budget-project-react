import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list"
//the css of react-swipeable-list
import "react-swipeable-list/dist/styles.css"
import { formatDate } from "../helpers"
//icons
import IconSavings from "../img/icono_ahorro.svg"
import IconFood from "../img/icono_comida.svg"
import IconHouse from "../img/icono_casa.svg"
import IconMisc from "../img/icono_gastos.svg"
import IconHealth from "../img/icono_salud.svg"
import IconEnter from "../img/icono_ocio.svg"
import IconSub from "../img/icono_suscripciones.svg"

const Spend = ({ id, spend, setEditSpend, deleteSpend }) => {
  //create a dict of icons to link icons and category
  const dictIcons = {
    savings: IconSavings,
    food: IconFood,
    house: IconHouse,
    miscellaneous: IconMisc,
    health: IconHealth,
    entertainment: IconEnter,
    subscription: IconSub
  }

  //the () because we send a return component
  //in the css we modify the styles of this components
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditSpend(spend)}>
        Edit
      </SwipeAction>
    </LeadingActions>

  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteSpend(spend.id)}
        //better delete transition
        destructive={true} >
        Remove
      </SwipeAction>
    </TrailingActions>

  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}

      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={dictIcons[spend.category]}
            />
            <div className="descripcion-gasto">
              <p className="categoria">
                {spend.category}
              </p>

              <p className="nombre-gasto">
                {spend.name}
              </p>

              <p className="fecha-gasto">
                Added on: {" "}
                <span>{formatDate(spend.date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">€{spend.amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spend
