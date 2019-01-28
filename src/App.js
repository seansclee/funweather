import React, { Component } from 'react'
import phone from './phone.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import logo from './logo.png'
import coloredLogo from './coloredLogo.png'
import './App.css'
import { Menu, Header, Icon, Segment, Grid, Image, Transition, Container, Button, Divider } from 'semantic-ui-react'


class App extends Component {
  state = { activeItem: 'home', phoneVisible: false }

  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, phoneVisible: true }), 250)
  }

  handleItemClick = (e, { name }) => this.setState({ ...this.state, activeItem: name })

  render() {
    const { activeItem, phoneVisible } = this.state
    return (
      <div className='App'>
        <Container style={{ paddingRight: '10em', paddingLeft: '10em' }}>
          <Menu inverted text size='mini'>
            <Menu.Item position='left' link href='/'>
              <Image size='small' src={logo} />
            </Menu.Item>
            <Menu.Menu>
              <Menu.Item
                style={{ marginRight: '2.5em' }}
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ marginLeft: '2.5em', marginRight: '2.5em' }}
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ marginLeft: '2.5em', marginRight: '2.5em' }}
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ marginLeft: '2.5em', marginRight: '2.5em' }}
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
                <Header as='h1' style={{ color: 'white', fontSize: '2.3em', paddingTop: '3em' }}>
                  <Header.Content>
                    Get the most fun weather app
                    <Header.Subheader style={{ color: 'white', padding: '2em 7em 1.5em 0em', fontSize: '.3em', lineHeight: '1.8em' }}>
                      Simple, nice and user-friendly application of the weather. Only useful information
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                <Button size='medium' color='orange'>Download</Button>
                <Button size='medium' color='blue'>Features</Button>
              </Grid.Column>
              <Grid.Column>
                <Transition visible={phoneVisible} animation={'fade up'} duration={500}>
                  <Image centered src={phone} style={{ height: '400px' }} />
                </Transition>
                <div class='bubble orange'>SUNNY</div>
                <div class='bubble blue'>LONDON</div>
                <div class='bubble white'>9°</div>
                <div class='bubble yellow'>RIO</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        <div id='button'>
          <Icon style={{ margin: 'auto' }} name='chevron down' />
        </div>
        </Container>
        <Header color='pink' as='h1' textAlign='center'>PERFECT FEATURES</Header>
        <Header color='brown' as='h4' textAlign='center'>Only necessary</Header>
        <Container style={{ padding: '10em 8em 20em' }}>
          <Grid equal centered columns={6}>
            <Grid.Column width={2}>
              <Image floated='right' src={icon1} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3'>
                <Header.Content style={{ color: '#353854' }}>
                  Usability
                  <Header.Subheader style={{ color: 'aeaeae', fontSize: '.7em', lineHeight: '1.8em' }}>
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
                <Header.Content style={{ color: '#353854' }}>
                  Parallax Effect
                  <Header.Subheader style={{ color: 'aeaeae', fontSize: '.7em', lineHeight: '1.8em' }}>
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
                <Header.Content style={{ color: '#353854' }}>
                  Unlimites Colors
                  <Header.Subheader style={{ color: 'aeaeae', fontSize: '.7em', lineHeight: '1.8em' }}>
                    Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid>
        </Container>
        <Segment color='purple' inverted style={{ padding: '2em 0em 2em' }}>
          <Container style={{ paddingRight: '10em', paddingLeft: '10em' }}>
            <Menu inverted text size='mini'>
              <Menu.Item position='left' link href='/'>
                <Image size='small' src={coloredLogo} />
              </Menu.Item>
              <Menu.Menu>
                <Menu.Item
                  style={{ marginRight: '2.5em' }}
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ marginLeft: '2.5em', marginRight: '2.5em' }}
                  name='features'
                  active={activeItem === 'features'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ marginLeft: '2.5em', marginRight: '2.5em' }}
                  name='reviews'
                  active={activeItem === 'reviews'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ marginLeft: '2.5em', marginRight: '2.5em' }}
                  name='download'
                  active={activeItem === 'download'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
              <Menu.Item fluid position='right'>
                <Icon size='large' link name='facebook f' />
                <Icon size='large' link name='instagram' />
                <Icon size='large' link name='twitter' />
              </Menu.Item>
            </Menu>
            <Divider inverted />
            <Header as='h6' style={{ color: '#565b87' }} inverted floated='right'>Weather App Theme by Gravpix recreated by Sean Lee 2019</Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
