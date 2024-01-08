# Sensor(I2C)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|ENV II|Humidity and Temperature|SHT30|I2C(0x44)||sensor(SHT3x)||
|^|Baromeric Pressure&Temperature|BMP280|I2C(0x76)||sensor(BMP280)||
|ENV III||SHT30|I2C||||
|^||QMP6988|^||||
|ENV IV Unit|Environmental Temperature Humidity Moisture Pressure|SHT40|I2C||||
|ENV Pro Unit|Environmental Temperature Humidity IAQ Pressure|BME688|I2C||||
||
|THERMAL|Infrared Imaging Measure|MLX90640|I2C|||||
|Termal2|Thermal Temperature Alarm|MLX90640+ESP32|I2C||||
|NCIR|Infared Temp Measure|MLX90614|I2C|||
|NCIR2|temprature Alarm NCIR|MLX90614+STM32|I2C|||||
|KMeter|K-Type ThermoCouple|MAX31855KASA+T|I2C|||
|KMeterISO Unit|Temp meter|MAX31855+STM32F030+CA-IS364HW|I2C||||
|CO2|CO2 Monitor|SCD40|I2C||||
|CO2L|Environmental Temprerature humidity Moisture|SCD41|I2C||||
|TVOC|Multi-Piexl Gas Sensor|SGP30|I2C||||
|BPS|Baromeric Pressure|BMP280|I2C||||
|BPS(QMP6988)|Barometric Pressure Temperature Height Testing|QMP6988|I2C||||
|HEART|O2 Heaart Rate Measure|MAX30100|I2C|||
||
|Ultrasonic|Distance Sonic|RCWL-9600|I2C||||
|Ultrasonic I2C|Distance Sonic|RCWL-9620|I2C||||
|Ultrasonic IO|Distance Sonic|RCWL-9620|GPIO||||
|TOF|Laser Distanace Measure|VL53L0c|I2C||||
|Unit-ToF4M|Laser Distance Sensor|VL53L1CXV0FY/1|I2C||||
||
|IMU|6-Axis Attitude|MPU6886|I2C|||
|IMU Pro Mini Unit||BMP280|I2C|||||
|^||BMI270|^||||
|^||BMM150|^||||
|Unit Limit|Travel Switch||GPIO|||
|PIR|PIR Human Motion||GPIO|||
|OP90|Limit Switch|ITR9606|GPIO|||
|OP180|Limit Switch|ITR9606|GPIO|||
|Weight|Weight|HX711|GPIO||||
|UNIT Scales|Scales|HX711->STM32|I2C|||
|Unit-Mini Scales|Mini Scale|HX711+STM32|I2C||||
|Gesture|Gesture|PAJ7620U2|I2C|||
|COLOR|Color Recognition|TCS3472|I2C||||
|LIGHT|Intensity|LM393|GPIO||||Analog & Digital Output|
|DLight Unit|Digital Ambient Light|BH1750FVI|I2C|||
|UNIT RTC|Clock|HYM8563|I2C|||
|^|^|BMM8563|^|||
|ACCEL|3-Axis Accelero Meter|ADXL345|I2C||||
|EARTH|SOIL Moisture Measure||Analog & Digital||||
|WATERING|Moisture Regulation Capacitive Probe||GPIO||||
|Tube Pressure|Air Pressure|MCP-H10-B200KPPN|GPIO|||||
|HALL EFFECT|Hall Sensor Switches|A3144E|GPIO|||||
|MIC|Sound Sensor|LM393|GPIO|||||
|^|^|MAX4466|^|||||
|PDM|PDM Microphone|SPM1423|I2C||||
|Buzzer|Passive Buzzer||GPIO|||||
|ADC|Analog/Digital Converte|ADS1100 16-bit|I2C||||
|DAC|D/A Convert|MCP4725|I2C|||||
|VMeter|Voltage Meter|ADS1115|I2C||||
|Ameter Unit|Current Meter|ADS1115|I2C|||
|AC Measure Unit|AC(Current Voltage) Measure unit|HW8032|I2C|||
|AIN4-20mA Unit|4-20mA Ain Module|HCNR200+STM32G030F6|I2C||||
|Unit-Reflective IR|IR Tracking Line Flower Reflective Unit||GPIO||DigitalIn<br/>AnalogIn|Digital & Analog|
|ID|Secure Key Storage|ATECC608B|I2C|||
|FINGER|Fingerprint Recognition|FPC1020A|UART|||

# Display
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|OLED|1.3 Inch B&W OLED|SH107|I2C|||
|LCD|1.14 Inch Color LCD|ST7789V2|I2C||||
|Digi-Clock|Digital Tube|TM1637+STM32F03||||
|Glass Unit|Transparent OLED 1.54|SSD1309+STM32F030F4P6+Buzzer(12864)|I2C||||
|Mini OLED Unit|Mini OLED 0.42||I2C|||||
|Glass2 Unit|Transparent OLED 1.54|SSD12864|I2C||||

# ACTUATORS(RGB LED)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|RGB|RGB LEDx3|SK6812|GPIO||neopixels||
|RGB LED STRIP|Light Strip IP65 waterroof||GPIO||neopixels||
|RGB LED|Light Strips||GPIO||neopixels||
|NeoHEX|RGB LED Panels||GPIO||neopixels||
|HEX|RGB LED Light Panel||GPIO||neopixels||
|Neco Unit|2020 RGB Neco Unit|WS2812C|GPIO||neopixels||

# ACTUATORS
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|VIVRATOR-MOTOR|UNIDIRECTIONAL VIBRATION MOTORS||GPIO|||||
|FAN|Undirectional DC Motors||GPIO|||||
|FlashLight|FlashLight|AW3641EDNR|GPIO PORTB|||
|Hbridge Unit|H-Bridge|RZ7899+STM32F030F3P6|I2C||||
|8Servos Unit|Motor Servo Controller Driver Unit||I2C||||
|HBridge v1.1 Unit|H-Bridge|RX7899+INA199A+STM32F030F4P6|I2C||||
|Unit-QRCode|QR Code scan|STM32|I2C||||
|SSR|Solid State Relay AC250V/DC5V||GPIO||DigitalOut||

# I-O(Relay)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|4-RELAY|4-Way relay AC250V/DC28V||I2C||||
|2-RELAY|2-Way Relay AC250V/DC28V||GPIO||DigitalOut||
|RELAY|Relay AC220V/DC30V||GPIO||DigitalOut||
|ACSSR|Single phase Solid State Relays||||
|DCSSR Unit|?||I2C||||

# I-O (input)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|BUTTON|Single Button||GPIO||digitai in(input)|1のみ。Pullup回路有り|
|Dual-BUTTON|Double Button||GPIO||digital in(input)|Pullup回路有り|
|Key|Mechanical Keys Green Shaft||GPIO|sk6812|digital in(input:1) <br/> neopixels(2)|keyは回路有り|
|JOYSTICK v1.1|3-Axis Input|MEGA8A|I2C||||
|ANGLE|Rotary PotentioMeter||GPIO||analog|10kΩ+10kΩ可変抵抗|
|Encoder|Rotary PotentoMeters 30Bit Pulse|STM32|I2C|||
|FADER|SLIDE PotentioMeters|10kΩ + 12xSK6812|GPIO||analog(1)<br/>neopixel(2)|可変抵抗はVCCを3.3Vに変換した後で接続されている|
|8Angle|Angle Adjustable PotentioMeter 8CH||I2C||||
|8Encoder|Encoder 8ch|STM32F030|I2C||||
|ExtEncoder Unit|Encode|STM32|I2C||||

# I-O (keyboard)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|CardKB v1.1|QWERTY keyboard|ATMEGA8A|I2C||||
|CardKB|QWERTY Keyboard|MEGA328P|I2C||||

# I-O (onput)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|DDS|Single Generators|AD9833|I2C||||
|EXT.IO|GPIO Expander|PCA9554PW|I2C|||
|EXT.IO2|IO Expander|STM32F030|I2C||||

# I-O (Converter/分配機)
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|Grove2Grove|On/Off Control + Current Meter||GPIO||digital out & analog||
|HUB|Interface Expansion|-|-|-|-|結線のみ|
|PaHUB|I2C Spliter|TCA9548A|I2C||||
|PaHUB2|I2C Spliter|PCA9548AP|I2C||||
|PbHUB|GPIO Expander|MEGA328|I2C||||
|PbHUB v1.1|GPIO Expander|STM32F030|I2C||||
|3.96|Interface Converter to HT3.96|||||
|TypeC2Grove|TypeC to Grove Power||-|-|-|電源供給用なのでノード不用|
|M5:bit|Communication Transfer With Microbit||||
|RCA|RCA A/V Composite Video or Audio||GPIO||||


# TRANCEIVERS
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|LoRaWAN915|LoRaWan 915MHz|ASR6501|UART||||
|LoRaWAN868|LoRaWan 868MHz|ASR6501|UART||||
|LoRaWAN470|LoRaWan 470MHz|ASR6501|UART||||
|LoRaE220-JP Unit|LoRa 920MHz|E220|UART||||
|CATM|CATM NB-IOT|SIM7080G|UART||||
|NB-IoT|Grobal NB-IoT|SIM7020G|UART||||
|NB-IoT-CN|Ghina NB-IoT|SIM7020C|UART||||
|Zigbee|Zigberr communication|CC2630|UART||||
|MQTT|MQTT Communication|W5500|UART|||有線LAN|
|MQTT PoE|MQTT PoE|W5500|UART|||有線LAN(PoE)|
|CatM GNSS|Dual Mode Communication GNSS Location||||
|IR|IR T/R||GPIO||DigitalIn&DigitalOut||
|RF433T|RF Transmitters|SYN115|GPIO||||
|RF433R|RF Recivers|SYM531R|GPIO||||
|GPS|Satellite Position|AT6558|UART|||
|RS485|LEVEL Converter|SP485EEN|UART|||
|ISO485|Isolated RS485|CA-IS3082W|UART||||
|CAN|CAN Bus R/T|CA-IS3050G|||||
|RFID|RFID Reader|MFRC522|I2C||||
|RFID2|RFID Reader|WS1850S|I2C||||
|UHF-RFID|UHF-RFID Reader|JRD-4035|UART|||
|LASER.RX|LASER receiver||GPIO||DigitalIn||
|LASER.TX|Laser emitter||GPIO||DigitalOut||
|UWB|Indoor Position|DW1000|UART|||

# HAT
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|NCIR|Infrared temp Measure|MLX90614|I2C|||
|HEART RATE|O2 Heart Rate Measure|MAX30102|I2C|||
|PIR|Human body Infraed human Motion||GPIO|||
|ToF|LASER Distance Measure|VL53L0X|I2C||||
|DLIGHT|Ambirnt Light|I2C|BH1750FV1||||
|THERMAL CAMERA|Infrared Imageing|MLX90640|I2C||||
|ENV II||SHT30|I2C||||
|^||BMP280|^|||
|^||BMM150|^||||
|ENV II.R||SHT30|I2C|||
|^||BMP280|^|||
|ENV III||SHT30|I2C|||
|^||QMP6988|^||||
|SPK|Speaker|PAM8303|||
|RS485|LEVEL Converter|SP485EEN|UART||||
|ADC|Analog/Digital Converter|ADS1100 16bit|I2C||||
|DAC|D/A Convert|MCP4725|I2C|||
|JOYSTICK|3-Axis Input|STM32F030F4|I2C||||
|FINGER|Fingerprint Recognition|FPC1025C|UART||||
|SERVO|SERVO Motor|ES92511II|||||
|8Servos|8-SERVO Driver|STM32F030F4|I2C||||
|8Servos v1.1|8-Servo Driver|STM32F030F4|I2C|||
|C_BACK DRIVER|4-Servo Driver|STM32F030F6P6|I2C||||
|C_BACK NBIoT CB|China NB-IOT|SIM7020C|UART||||
|CardKB|QWERTY Keyboard|MEGA328P|I2C||||
|JoyC|3-Axis Input@2|STM32F030F4|I2C||||
|PowerC|Rechargeable 16340 Battry||||
|NeoFlash|Matrix RGB|WS2812||||
|C-BACK NB-IoT(SIM7020G)|NB-IoT Network|SIM7020G|UART||||
|MiniEncoderC Hat|Rotary Encoder hat|STM32F030|I2C||||
|MiniJoyC||STM32F030+SK6812|||||
|HAT-Vibtrator|DCMotor Vibrator|||||
|Hat-SPK2|Speaker Hat|MAX98357|||||

# ATOME-BASE
|Unit Name|function|Device||Moddable|NodeRed MCU|備考|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|
|ATOM DTU CAT1|China LET-CAT1 RS485|SIMA7680C|||||
|ATOM DTU NB|NB-IoT|SIM7020G|UART||||
|ATOM DTU NB CN|NB-IOT|SIM7020C|UART|||||
|ATOM DTU LoRaWAN915|LoRaWan 915MHz|ASR6501|UART|||||
|ATOM DTU LoRaWAN868|LoRaWan 868MHz|ASR6501|UART|||||
|ATOM DTU LoRaWAN470|LoRaWan 470MHz|ASR6501|UART|||||
|ATOM PoE|Ethernet Control|W5500||||
|ATOM Display|Display Driver|FPGA||||
|ATOM Display Lite|Display Driver|FPGA||||
|ATOM CAN|CAN Bus R/T|CA-IS3050G|||||
|ATOM RS-485|LEVEL Converter|SP3485EE|UART||||
|ATOM RS-232|TTL-RS232|MAX323+A0Z128CI||||
|ATOM SWITCH|2-Way Switch|SP485EE||||
|ATOM SWITCH-D|2-Way Switch|SP485EE||||
|Tail485|LEVEL Converter SP485EEN||||
|ATOM STEPMOTOR|StepMotor Driver|DRV8825|GPIO|||
|ATOM H-DRIVER|Motor Diver|DRV8876 ADC||||
|ATOM PWM|Adjust DC Driver|EG27324 MOSFET||||
|ATOM MOTION|SERVO & Motor Driver|RZ7899 ETA9740 STM32|||||
|ATOM QR-CODE|QR Code Reader||UART/TTL|||||
|ATOM GPS|Satellite Position|M8030-JT|UART||||
|ATOM TF-CARD|External Storage||||||
|ATOM SPK|Audio Playback||||
|ATOM SOCKET|SMART Socket|HLW8032|UART|||||
|ATOM SOCKET CN|Smart Socket|HLW8032|UART|||||
|ATOM Printer|Thermal Printer|ESP32 AP+MQTT|||||
|ATOM QR-CODE Kit|QR Code Scan|||||
|ATOM QR-CODE v1.1(Excluding Atom)|QR Code Scan|||||
|||
|Atomic RS485 Base|TTL RS485 Convertor|SP3485EE A0Z1282CI|UART|||||
|Atomic RS232 Base|TTL RS232 Convertor|MAX323 A0Z1282CI|UART|||||
|Atomic SPK Base|SPK SPEAKER|NS4168||||
|Atomic Stepmotor Base|ATOM STEPMOTOR Driver|DRV8825||||
|Atomic TF-Card Reader|Atom TF Card External storage file|||||
|Atomic CAN Base|CAN Bus|CA-IS3050G|||||
|Atomic PWM Base|DC Motor Driver|FDD8447L EG27324|||||
|Atomic PoE Base|Ethernet Control PoE|W5500|||||
|Atomic GPS Base|Position Satellite|M8083-KT||||
