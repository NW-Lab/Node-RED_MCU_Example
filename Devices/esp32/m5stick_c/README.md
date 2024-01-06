# ESP32/M5STICK C
Platform esp32/m5stick_c

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash4MB) | 〇 | 〇 | 〇 |  
| Display | ST7735S(80x160) | 〇   | 〇   | 〇   |
|Power Controler|AXP192||||
|Button|A/B|〇|〇|〇|
|LED|Red/IR|〇|〇|〇|
|6-Axis MotionTracking Sensor|MPU6886|||
| MIC |SPM1423|  |  |  |
| RTC |BM8563|  |  |  |

# Pin Map
https://docs.m5stack.com/en/core/m5stickc

## LED
|RED|IR|
|:==:|:==:|
|10|9|

## Button
|Btn A|Btn B|
|:==:|:==:|
|37|39|

## MIC
| clk | Data|
| :--: |:--: |
| 0  |34|

## Internal I2C
- 6-Axis posture sensor SH200Q(初期)
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
