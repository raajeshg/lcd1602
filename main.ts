I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    I2C_LCD1602.ShowString("temperature:", 0, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 12, 0)
    I2C_LCD1602.ShowString("C", 14, 0)
})
