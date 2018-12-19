import React, { Component } from 'react';
import ServiceCategories from '../components/ServiceCategories';
import Header from '../components/Header';
import MapContainer from '../containers/MapContainer';

import ServiceCategories from '../components/service-categories';
import ListOfServiceProviders from '../components/list-of-service-providers';
import Header from '../components/header';

import { loadResults } from '../utilities/api';

export default class Index extends Component {
  state = {
    serviceProviders: []
  }

  doSetCategory = categoryName => {
    const {
      history: { push, location },
      categoryContext: { setCategory }
    } = this.props;
    setCategory(categoryName);
    push(`${location.pathname}?category=${categoryName}`);
    loadResults(location.search).then(res => this.setState({serviceProviders: res}))
  };

  render() {
    const { serviceProviders } = this.state;
    const { history } = this.props;

    return (
      <section>
        <Header />
        <main role="main">
          <ServiceCategories doSetCategory={this.doSetCategory} />
          <ListOfServiceProviders serviceProviders={serviceProviders} history={history}/>
        </main>
      </section>
    );
  }
}
