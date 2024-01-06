# ESP32/M5StickC PLUS
Platform esp32/m5stick_cplus

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash4MB) | 〇 | 〇 | 〇 |  
| Display | ST7789v2(135x240) | 〇   | 〇   | 〇   |
|Power Controler|AXP192||||
|Button|A/B|〇|〇|〇|
|LED|Red/IR|〇|〇|〇|
|Bz|||||
|6-Axis MotionTracking Sensor|MPU6886|||
| MIC |SPM1423|  |  |  |
| RTC |BM8563|  |  |  |

# Pin Map
https://docs.m5stack.com/en/core/m5stickc_plus

## LED
|RED|IR|
|:==:|:==:|
|10|9|

## Button
|Btn A|Btn B|
|:==:|:==:|
|37|39|

## Buzzer
DigitalOut
|BZ|
|:==:|
|2|


## MIC
| clk | Data|
| :--: |:--: |
| 0  |34|

## Internal I2C
- 6-Axis posture sensor MPU6886:0x68
- RTC BM8563
- PMC AXP192

| SCL | SDA |
| :-: | :-: |
| 22  | 21  |

## Grove A Port
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 33  | 32  | 5V  | GND |
