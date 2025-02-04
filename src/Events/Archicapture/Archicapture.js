import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const Archicapture = () => {
    let event = {
        name: "Archicapture",
        about: " lorem ipsum            Sit nostrud pariatur sunt ipsum officia cupidatat consequat non et non nulla. Enim in sunt qui dolore cillum cupidatat dolore quis aute duis. Nulla sunt aliquip excepteur elit esse veniam ullamco commodo adipisicing. Enim adipisicing tempor irure fugiat consequat minim. Deserunt officia deserunt amet dolor amet consectetur. Velit aliquip excepteur ut excepteur sit deserunt est adipisicing ut proident sit magna minim et.Ex id aliquip tempor officia esse nulla voluptate sunt voluptate ea culpa incididunt. Enim magna do elit elit eiusmod. Et eu quis laborum minim in nulla aliqua adipisicing irure id.",
        team: "Non reprehenderit exercitation cillum culpa nostrud do veniam non. Sunt sint aliquip velit cupidatat eiusmod magna ea id proident adipisicing deserunt. Labore ullamco excepteur nostrud commodo consequat nostrud qui. Non labore labore duis proident occaecat ut commodo et adipisicing officia deserunt. Adipisicing ex occaecat duis magna ad reprehenderit. Nostrud commodo amet consequat magna id exercitation dolor esse exercitation tempor adipisicing duis irure.",
        rules: "Adipisicing culpa dolor aliquip excepteur amet id esse. Nulla mollit anim incididunt nulla sunt. Nulla commodo eu cupidatat sint duis. Excepteur nisi et ad commodo esse sint occaecat. Tempor exercitation excepteur dolor adipisicing in esse eiusmod laboris incididunt adipisicing. Incididunt fugiat do qui eu exercitation pariatur aliquip. Non elit mollit ex esse quis tempor velit irure ullamco ipsum dolore.",
        venue: "Nostrud minim et officia nostrud nisi velit qui exercitation esse culpa cupidatat est. Consectetur proident cillum in nostrud nisi velit. Non laboris occaecat tempor sunt velit esse velit magna eu cupidatat quis mollit sunt. Commodo Lorem anim cupidatat eu labore tempor ullamco anim commodo occaecat anim. Ad voluptate eu excepteur eiusmod dolore qui adipisicing eu incididunt qui reprehenderit eiusmod.",
        aim: " Qui nisi voluptate sint incididunt enim ex enim sit quis. Veniam irure laborum labore adipisicing cillum minim. Incididunt laborum aute id labore eu amet. Ex amet deserunt occaecat consectetur. Incididunt anim consequat ullamco enim anim culpa. Reprehenderit cupidatat sint nulla est. Est proident est elit consectetur ut adipisicing eiusmod amet tempor laboris proident."
    }
  return (
    <div>
            <div>
                <Carousel />
            </div>
            <div>
                <Component event={event} />
            </div>
        </div>
  )
}

export default Archicapture