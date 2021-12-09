import React, { Component } from 'react'

export default class JsFun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            romInput: '',
            romSubmit: '',
            ciphInput: '',
            ciphSubmit: ''
        };
        this.handleChangeRom = this.handleChangeRom.bind(this);
        this.handleSubmitRom = this.handleSubmitRom.bind(this);
        this.handleChangeCiph = this.handleChangeCiph.bind(this);
        this.handleSubmitCiph = this.handleSubmitCiph.bind(this);
        
    }
    handleChangeCiph(event) {
        this.setState({
            ciphInput: event.target.value
        });
    }
    handleChangeRom(event) {
        this.setState({
            romInput: event.target.value
        });
    }
    handleSubmitCiph(event) {
        event.preventDefault()
        this.setState({
            ciphSubmit: this.state.ciphInput
        })
    }
    handleSubmitRom(event) {
        event.preventDefault()
        this.setState({
            romSubmit: this.state.romInput
        });
    }
    render() {
        let num;
        let cipher;
        const convertToRoman = (digit) => {
            if (isNaN(digit))
                return NaN;
            var digits = String(+digit).split(""),
                key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                roman = "",
                i = 3;
            while (i--)
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            num = Array(+digits.join("") + 1).join("M") + roman;
            return num
        }
        convertToRoman(this.state.romSubmit);

        function rot13(str) {
            const input = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
              const output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
              let encoded = '';
              for (let i=0; i < str.length; i++) {
                 if(/\w/gi.test(str[i])){
                  const index = input.indexOf(str[i]);
                  encoded += output[index];
                  }
                  else {
                    encoded += str[i]
                  }
              }
              cipher = encoded;
              return cipher;
          }
          rot13(this.state.ciphSubmit)
          

        return (
            <section id='projects' className='projects-section'>
                <div className="projects-grid">
                    <div className='card project project-title'>
                        <p><span class="code">&lt;&nbsp;</span>
                        Roman Numeral Converter
                        <span class="code">&nbsp;&#47;&gt;</span></p>
                        <input type="number"
                            placeholder='Input Number'
                            value={this.state.romInput}
                            onChange={this.handleChangeRom} />
                            <p>{num}</p>
                        <button className='btn btn-show-all' onClick={this.handleSubmitRom} type='submit'>Submit!</button>
                    </div>
                    <div className='card project project-title'>
                        <p><span class="code">&lt;&nbsp;</span>
                        Caesars Cipher
                        <span class="code">&nbsp;&#47;&gt;</span></p>
                        <input type="text"
                            placeholder='To be Ciphered'
                            value={this.state.ciphInput}
                            onChange={this.handleChangeCiph} />
                            <p>{cipher}</p>
                        <button className='btn btn-show-all' onClick={this.handleSubmitCiph} type='submit'>Submit!</button>
                    </div>
                </div>
            </section>
        );
    }
};


