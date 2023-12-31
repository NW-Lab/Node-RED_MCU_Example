# ESP32/M5ATOM Echo
Platform esp32/m5atome_echo

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash 4MB) | 〇 | 〇 | 〇 |  
| Button  | A | 〇  | 〇  | 〇  |
| IR LED||〇|〇|〇|
| RGB LED(NeoPixel) | SK6812 3535 x 1 | 〇   | 〇   | 〇   |
| Speaker|NS4168 I2S||||
| Mic | SPM1423 PDM||||

# Pin Map
https://docs.m5stack.com/en/atom/atomecho

## Button 
Digital In ( Pull Up )
| Btn A |
| :---: |
| 39  |
## IR LED 
Digital Out
| IR |
| :---: |
| 12  |


## RGB LED(NeoPixel)
| Data |
| :----: |
| 27     |

## Speaker
| AMPDATA | AMP BCLK| AMP LRCK|
| :---: |:---: |:---: |
| 12  |19|33|
## Mic
| Clk(Sys LRCK) | Data|
| :---: | :---: |
| 33  |23|
## Grove Port
| ADC | DAC | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 32  | 26  | 5V  | GND |
