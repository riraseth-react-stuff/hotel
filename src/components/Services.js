import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatum?'
      },
      {
        icon: <FaHiking></FaHiking>,
        title: 'endles hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatum?'
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatum?'
      },
      {
        icon: <FaBeer></FaBeer>,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatum?'
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
