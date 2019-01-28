import React, { Component } from 'react';
import phone from './phone.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import './App.css';
import { Menu, Header, Icon, Segment, Grid, Image, Transition, Container, Button, Divider } from 'semantic-ui-react'


class App extends Component {
  state = { activeItem: 'home', visible: false }

  componentDidMount() {
    setTimeout(() => this.setState({ activeItem: 'home', visible: true }), 250)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, visible } = this.state
    return (
      <div className='App'>
        <Container style={{ paddingRight: '10em', paddingLeft: '10em'}}>
          <Menu inverted text size='mini'>
            <Menu.Item position='left' link href='/'>
              <Header as='h5' style={{ color: 'white' }}>FUN WEATHER.</Header>
            </Menu.Item>
            <Menu.Menu>
              <Menu.Item
                style={{paddingLeft: '2em', paddingRight: '2em'}}
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='download'
                active={activeItem === 'download'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
            <Menu.Item position='right'>
              <Icon size='large' link name='facebook f' />
              <Icon size='large' link name='instagram' />
              <Icon size='large' link name='twitter' />
            </Menu.Item>
          </Menu>
        </Container>
        <Container style={{ height: '600px', paddingRight: '10em', paddingLeft: '10em' }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header as='h1' style={{ color: 'white' }}>
                  Get the most fun weather app
                </Header>
                <Header as='h5' style={{ color: 'white' }}>
                  Simple, nice and user-friendly application of the weather. Only useful information
                </Header>
                <Button color='orange'>Download</Button>
                <Button color='blue'>Features</Button>
              </Grid.Column>
              <Grid.Column>
                <Transition visible={visible} animation={'fade down'} duration={500}>
                  <Image centered src={phone} style={{ height: '400px' }} />
                </Transition>
                <div class='bubble-orange'>SUNNY</div>
                <div class='bubble-blue'>LONDON</div>
                <div class='bubble-white'>9°</div>
                <div class='bubble-yellow'>RIO</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <div id='down-button'>
          <Icon style={{ margin: 'auto' }} name='chevron down' />
        </div>
        <Header as='h1' textAlign='center' style={{ color: 'blue' }}>PERFECT FEATURES</Header>
        <Header as='h4' textAlign='center' style={{ color: 'grey' }}>Only necessary</Header>
        <Container style={{ padding: '10em 8em 20em' }}>
          <Grid equal columns={6}>
            <Grid.Column width={2}>
              <Image floated='right' src={icon1} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3'>
                <Header.Content>
                  Usability
                <Header.Subheader>
                  Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Image floated='right' src={icon2} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3'>
                <Header.Content>
                  Parallax Effect
                <Header.Subheader>
                  Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Image floated='right' src={icon3} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3'>
                <Header.Content>
                  Unlimites Colors
                <Header.Subheader>
                  Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid>
        </Container>
        <Segment color='violet' inverted style={{ padding: '2em 0em 2em' }}>
          <Container style={{ paddingRight: '10em', paddingLeft: '10em'}}>
            <Menu inverted text size='mini'>
              <Menu.Item position='left' link href='/'>
                <Header as='h5' style={{ color: 'white' }}>FUN WEATHER.</Header>
              </Menu.Item>
              <Menu.Menu>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='features'
                  active={activeItem === 'features'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='reviews'
                  active={activeItem === 'reviews'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='download'
                  active={activeItem === 'download'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
              <Menu.Item position='right'>
                <Icon size='large' link name='facebook f' />
                <Icon size='large' link name='instagram' />
                <Icon size='large' link name='twitter' />
              </Menu.Item>
            </Menu>
            <Divider inverted />
            <Header as='h6' inverted floated='right'>2019 Sean Lee</Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
