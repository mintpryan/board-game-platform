import React from "react";
import { NavLink } from "react-router-dom";
import {
  Section,
  BaseTitle,
  HomeMain,
} from "../styles/styles";
import {  ResponsiveDesktopAnalog } from "../styles/main";
import img_0 from "../assets/features/feature_0.png";
import img_1 from "../assets/features/feature_1.png";
import img_2 from "../assets/features/feature_2.png";
import img_3 from "../assets/features/feature_3.png";
import img_4 from "../assets/features/feature_4.png";
import img_5 from "../assets/features/feature_5.png";
import CardComponent from "../components/CardComponent";

export default function Home() {

  return (
    <>
      <main>
        <ResponsiveDesktopAnalog>
          <BaseTitle>Welcome to Sip & Play - Board Game Cafe in NYC!</BaseTitle>
        </ResponsiveDesktopAnalog>

        <Section>
          <div id="sect_1"></div>
          <CardComponent
            title="Hours & Location"
            text={
              <>
                New opening hours: <br></br>Sunday: 10am-11pm<br></br>Mon-Thurs:
                11am-11pm <br></br>Fri: 11am-midnight <br></br>Sat:
                10am-midnight ​ <br></br>​ <br></br>Our kitchen closes 2.5-3
                hours before we close! ​ ​ <br></br>
                <br></br>471 5th Ave. Brooklyn, NY 11215 <br></br>
                sipnplaynyc@gmail.com<br></br>
                <a href="tel:718-971-1684">718-971-1684</a>
              </>
            }
            imageUrl={img_0}
            reverse={true}
          ></CardComponent>
          <div id="sect_2"></div>
          <CardComponent
            title="Ambiance & Atmosphere"
            text={
              <>
                Step into a warm, inviting space with comfortable seating and a
                vibrant atmosphere. Our cafe is designed to make you feel at
                home, with ambient lighting, rustic decor, and modern style.
                Whether you're here for a quick coffee or a marathon gaming
                session, our environment is perfect for relaxing and having fun.
              </>
            }
            imageUrl={img_1}
            reverse={false}
          ></CardComponent>
          <div id="sect_3"></div>
          <CardComponent
            title="Extensive Game Library"
            text={
              <>
               Our extensive library
                boasts over 500 board games, catering to all ages and
                preferences. From classic games like Monopoly and Scrabble to
                modern favorites like Catan and Ticket to Ride, there's
                something for everyone. Our knowledgeable staff can always
                recommend games and explain the rules, ensuring you have the
                best possible experience.
              </>
            }
            imageUrl={img_2}
            reverse={true}
          ></CardComponent>
          <div id="sect_4"></div>
          <CardComponent
            title="Delicious Food & Drinks"
            text={
              <>
                
                Our delightful menu
                , which features a variety of snacks, meals, and beverages.
                Enjoy freshly brewed coffee, artisanal teas, and a selection of
                craft beers and wines. Our kitchen serves up delicious
                sandwiches, salads, and pastries, perfect for fueling your
                gaming adventures.
              </>
            }
            imageUrl={img_3}
            reverse={false}
          ></CardComponent>
          <div id="sect_5"></div>
          <CardComponent
            title="Events & Community"
            text={
              <>
                Join us for{" "}
                <NavLink to="/events">
                  <u>regular events</u>
                </NavLink>
                , including game nights, tournaments, and special-themed nights.
                Our cafe is more than just a place to play games; it's a
                community hub where you can meet new friends and share your love
                for board games. Check our calendar for upcoming events, and
                reserve your spot!
              </>
            }
            imageUrl={img_4}
            reverse={true}
          ></CardComponent>
          <div id="sect_6"></div>
          <CardComponent
            title="Private Parties & Reservations"
            text={
              <>
                Looking for a unique venue for your next celebration? Our cafe
                offers private party bookings for birthdays, corporate events,
                and more. Customize your event with game selections, special
                menus, and dedicated staff to make your occasion memorable.
              </>
            }
            imageUrl={img_5}
            reverse={false}
          ></CardComponent>
        </Section>
      </main>
    </>
  );
}
