import React, { Component } from 'react'
import phone from './phone.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import logo from './logo.png'
import coloredLogo from './coloredLogo.png'
import './App.css'
import Scroll from 'react-scroll'
import { Menu, Header, Icon, Segment, Grid, Image, Transition, Container, Button, Divider } from 'semantic-ui-react'


class App extends Component {
  state = { activeItem: 'home', phoneVisible: false }

  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, phoneVisible: true }), 500)
  }

  handleItemClick = (e, { name }) => this.setState({ ...this.state, activeItem: name })

  scrollTo = () => Scroll.animateScroll.scrollTo(880)

  render() {
    const { activeItem, phoneVisible } = this.state
    return (
      <div className='App'>

        {/* top navbar */}
        <Container>
          <Menu inverted text size='small'>
            <Menu.Item position='left' link href='/'>
              <Image size='small' src={logo} />
            </Menu.Item>
            <Menu.Menu>
              <Menu.Item
                style={{ marginRight: '3.5em' }}
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ marginLeft: '3em', marginRight: '3em' }}
                name='features'
                active={activeItem === 'features'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ marginLeft: '3em', marginRight: '3em' }}
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ marginLeft: '3em', marginRight: '3em' }}
                name='download'
                active={activeItem === 'download'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
            <Menu.Menu relaxed position='right'>
              <Menu.Item href='https://www.facebook.com'>
                <Icon size='large' name='facebook f' />
              </Menu.Item>
              <Menu.Item href='https://www.instagram.com'>
                <Icon size='large' name='instagram' />
              </Menu.Item>
              <Menu.Item href='https://twitter.com'>
                <Icon size='large' name='twitter' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>

        {/* main banner */}
        <Container style={{ height: '50vw' }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header as='h1' style={{ color: 'white', fontSize: '3vw', paddingTop: '11vw' }}>
                  <Header.Content>
                    Get the most fun weather app
                    <Header.Subheader style={{ color: 'white', padding: '2vw 10vw 2vw 0em', fontSize: '.3em', lineHeight: '1.8em' }}>
                      Simple, nice and user-friendly application of the weather. Only useful information
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                <Container style={{ marginBottom: '11vw' }}>
                  <Button size='big' color='orange'>Download</Button>
                  <Button size='big' color='blue'>Features</Button>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Transition visible={phoneVisible} animation={'fade up'} duration={1000}>
                  <Image
                    centered
                    src={phone}
                    style={{ width: '18vw', paddingTop: '6vw', paddingRight: '3vw' }}
                  />
                </Transition>
                <div class='bubble orange'>SUNNY</div>
                <div class='bubble blue'>LONDON</div>
                <div class='bubble white'>9°</div>
                <div class='bubble yellow'>RIO</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div id='button' onClick={this.scrollTo}>
            <Icon style={{ margin: 'auto' }} name='chevron down' />
          </div>
        </Container>

        {/* features overview */}
        <Container style={{ paddingTop: '5.5vw' }}>
          <Header color='pink' as='h1' textAlign='center' style={{ fontSize: '1.8vw' }}>PERFECT FEATURES</Header>
          <Header color='brown' as='h4' textAlign='center'>Only necessary</Header>
        </Container>
        <Container style={{ padding: '8vw 0vw 23.2vw' }}>
          <Grid columns={6}>
            <Grid.Column width={2}>
              <Image floated='right' src={icon1} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3'>
                <Header.Content style={{ color: '#353854', fontSize: '1.2vw' }}>
                  Usability
                  <Header.Subheader style={{ color: 'aeaeae', fontSize: '.75vw', paddingTop: '.8vw', lineHeight: '1.8em' }}>
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
                <Header.Content style={{ color: '#353854', fontSize: '1.2vw' }}>
                  Parallax Effect
                  <Header.Subheader style={{ color: 'aeaeae', fontSize: '.75vw', paddingTop: '.8vw', lineHeight: '1.8em' }}>
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
                <Header.Content style={{ color: '#353854', fontSize: '1.2vw' }}>
                  Unlimites Colors
                  <Header.Subheader style={{ color: 'aeaeae', fontSize: '.75vw', paddingTop: '.8vw', lineHeight: '1.8em' }}>
                    Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid>
        </Container>

        {/* footer */}
        <Segment color='purple' inverted style={{ padding: '3.8vw 0em 6.1vw' }}>
          <Container>
            <Menu inverted text size='small'>
              <Menu.Item position='left' link href='/'>
                <Image size='small' src={coloredLogo} />
              </Menu.Item>
              <Menu.Menu>
                <Menu.Item
                  style={{ marginRight: '3.5em' }}
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ marginLeft: '3em', marginRight: '3em' }}
                  name='features'
                  active={activeItem === 'features'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ marginLeft: '3em', marginRight: '3em' }}
                  name='reviews'
                  active={activeItem === 'reviews'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ marginLeft: '3em', marginRight: '3em' }}
                  name='download'
                  active={activeItem === 'download'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
              <Menu.Menu relaxed position='right'>
                <Menu.Item href='https://www.facebook.com'>
                  <Icon size='large' name='facebook f' />
                </Menu.Item>
                <Menu.Item href='https://www.instagram.com'>
                  <Icon size='large' name='instagram' />
                </Menu.Item>
                <Menu.Item href='https://twitter.com'>
                  <Icon size='large' name='twitter' />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Divider inverted style={{ paddingBottom: '3.8vw' }}/>
            <Header as='h5' style={{ color: '#565b87', paddingTop: '1.3vw' }} inverted floated='right'>Weather App Theme by Gravpix recreated by Sean Lee 2019</Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
