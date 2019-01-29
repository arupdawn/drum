import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { StyleSheet, View, Alert } from 'react';
import './Comp.css';
import color from '@material-ui/core/colors/cyan';


class Grids extends React.Component{
    constructor(props) {
        super(props);
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.state = {
            power:true,
            play: false,
            valuee: 'Heater Kit',
            checkedB:true,
            bank:'one',
          arr: [
              {id:'Q',val:'Heater-1',valtwo:'Chord-1',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
              

              {id:'W',val:'Heater-2',valtwo:'Chord-2',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'},

              {id:'E',val:'Heater-3',valtwo:'Chord-3',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'},

              {id:'A',val:'Heater-4',valtwo:'Shaker',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'},

              {id:'S',val:'Clap',valtwo:'Open-HH',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},

              {id:'D',val:'Open HH',valtwo:'Closed-HH',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},

              {id:'Z',val:'Kick n Hat',valtwo:'Punchy-Kick',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},

              {id:'X',val:'Kick',valtwo:'Side-Stick',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},

              {id:'C',val:'Closed HH',valtwo:'Snare',
              root:{ backgroundColor:'#4CAF50', padding: '25px 40px',fontSize: 16},
              url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
              url2:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'},
          ],
          backcolour:'yellow'
        }
       
        //this.togglePlay = this.togglePlay.bind(this);
        this.ChangeColour=this.ChangeColour.bind(this);
        
        //this.setTimeout=this.setTimeout.bind(this);
        

    }
    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
     }
   
     componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
     }

    handleKeyPress(e){           
            if((e.keyCode == 81)||(e.keyCode == 113)){
                document.getElementById("Q").click();
            }
            else if((e.keyCode == 87)||(e.keyCode == 119)){
                document.getElementById("W").click();
            }
            else if((e.keyCode == 69)||(e.keyCode == 101)){
                document.getElementById("E").click();
            }
            else if((e.keyCode == 65)||(e.keyCode == 97)){
                document.getElementById("A").click();
            }
            else if((e.keyCode == 83)||(e.keyCode == 115)){
                document.getElementById("S").click();
            }
            else if((e.keyCode == 68)||(e.keyCode == 100)){
                document.getElementById("D").click();
            }
            else if((e.keyCode == 90)||(e.keyCode == 122)){
                document.getElementById("Z").click();
            }
            else if((e.keyCode == 88)||(e.keyCode == 120)){
                document.getElementById("X").click();
            }
            else if((e.keyCode == 67)||(e.keyCode == 99)){
                document.getElementById("C").click();
            }

               
    }
    

    ChangeColour(e){
      
      if(this.state.power){

        let arrCopy=JSON.parse(JSON.stringify(this.state.arr))
        let arrCopy2=JSON.parse(JSON.stringify(this.state.arr))

        let valDisp = this.state.arr[0].val;
        let valDisp2= this.state.arr[0].valtwo;
        var i=0,val2= this.state.arr[0].id,k=0;
        
        for(i=0;i<=this.state.arr.length-1;i=i+1){
            val2= this.state.arr[i].id;
            valDisp = this.state.arr[i].val;
            valDisp2= this.state.arr[i].valtwo;
            if(e.target.value == val2){
                arrCopy[i].root.backgroundColor = "yellow";

                if(this.state.checkedB){
                    var audio = new Audio(arrCopy[i].url);
                    console.log(audio);

                    setTimeout( () => {   
                        audio.play();   
                    }, 200);

                    this.setState({
                        arr:arrCopy,
                        valuee:valDisp
                    })
                }
                else{
                    var audio = new Audio(arrCopy[i].url2);
                    console.log(audio);

                    setTimeout( () => {   
                        audio.play();   
                    }, 100);

                    this.setState({
                        arr:arrCopy,
                        valuee:valDisp2
                    })
                }
               
                k=i;         
            }
        }

        setTimeout( () => {
            arrCopy2[k].root.backgroundColor = "#4CAF50";
            this.setState({
                arr:arrCopy2
            });
           
          }, 189);

      }
    }

    handleChange = name => event => {
        if(this.state.checkedB)
        this.setState({ [name]: false,bank:'two',valuee:'Piano Kit' });
        else
        this.setState({ [name]: true,bank:'one',valuee:'Heater Kit' });
    };

    handleChangePower = name => event => {
        if(this.state.power)
        this.setState({ [name]: false,valuee:'OFF'});
        else
        this.setState({ [name]: true,valuee:'ON'});
    };

      render() {
        // change code below this line
         
            
          var PaperStyle = {
             root:{
                  backgroundColor:'#cce6ff',
                  paddingtop:'10px',
                  marginBottom:'30px',
                  padding: '10px 40px',
                  width: '88px',
                  fontSize: 16,
                  fontcolor:'#4CAF50',
                  '&:hover': {
                    backgroundColor: 'yellow',
                  },
              }
          
          }

          var BankStyle = {
            root:{
                 backgroundColor:'#cce6ff',
                 paddingtop:'10px',
                 marginBottom:'30px',
                 padding: '0px 40px',
                 height: '',
                 width: '88px',
                 fontSize: 16,
                 fontcolor:'#4CAF50',
                 '&:hover': {
                   backgroundColor: 'yellow',
                 },
             }
         
         }

         var foot={
            marginBottom:'10px',
         }

      
    
        return (
            
            <div id="MainContainer" >
            <div id="Container">
        
              <div id="DrumPad">
               <Grid onKeyPress={this.handleKeyPress}>
                    <Typography variant="subtitle1" gutterBottom>
                      Drum-Pad
                    </Typography>
                    <Grid container spacing={8}>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='Q' value='Q' variant="contained" style={this.state.arr[0].root} onClick={this.ChangeColour} onKeyPress={this.handleKeyPress}>
                                Q
                            </Button>
                          </Paper>
                      </Grid>
                      <Grid item s={2}>
                          <Paper>
                             <Button id='W' value='W' variant="contained" style={this.state.arr[1].root} onClick={this.ChangeColour}>
                                W
                            </Button>
                          </Paper>
                      </Grid>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='E' value='E'variant="contained" style={this.state.arr[2].root} onClick={this.ChangeColour}>
                                E
                            </Button>
                          </Paper>
                      </Grid>
                    </Grid>
        
                    <Grid container spacing={8}>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='A' value='A' variant="contained" style={this.state.arr[3].root} onClick={this.ChangeColour} onKeyPress={this.handleKeyPress}>
                                A
                            </Button>
                          </Paper>
                      </Grid>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='S' value='S' variant="contained" style={this.state.arr[4].root} onClick={this.ChangeColour}>
                                S.
                            </Button>
                          </Paper>
                      </Grid>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='D' value='D' variant="contained" style={this.state.arr[5].root} onClick={this.ChangeColour}>
                                D
                            </Button>
                          </Paper>
                      </Grid>
                    </Grid>
        
                    <Grid container spacing={8}>
                      <Grid item s={2}>
                          <Paper>
                           <Button id='Z' value='Z' variant="contained" style={this.state.arr[6].root} onClick={this.ChangeColour}>
                                Z
                            </Button>
                          </Paper>
                      </Grid>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='X' value='X' variant="contained" style={this.state.arr[7].root} onClick={this.ChangeColour}>
                                X.
                            </Button>
                          </Paper>
                      </Grid>
                      <Grid item s={2}>
                          <Paper>
                            <Button id='C' value='C' variant="contained" style={this.state.arr[8].root} onClick={this.ChangeColour}>
                                C
                            </Button>
                          </Paper>
                      </Grid>
                    </Grid>
                      
                </Grid>
              </div>
        
              <div id="Drum2">
                      <Typography variant="subtitle1" gutterBottom>
                           .............ACC..............
                      </Typography>
                      <Paper style={BankStyle.root}>
                         <FormControlLabel
                            control={
                              <Switch checked={this.state.power} onChange={this.handleChangePower('power')} value="power" color="secondary"/>
                            }
                            label='power'
                          />
                      </Paper>
                      <label></label>

                      <Paper style={PaperStyle.root} >
                        <label variant="subtitle1"  >
                                    {this.state.valuee}
                        </label>
                      </Paper>

                      <Paper style={BankStyle.root} >
                      <FormControlLabel
                            control={
                              <Switch checked={this.state.checkedB} onChange={this.handleChange('checkedB')} value="checkedB" color="primary"/>
                            }
                            label='Bank'
                          />
                      </Paper>
                      

              </div>
                                
            <footer> . </footer>
            <footer style={foot}> -----------designed by Arup Dawn-----------</footer>
            </div>
           
            </div>
        );
      }
    };

export default Grids;
