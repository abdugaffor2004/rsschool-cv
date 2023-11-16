# rsschool-cv
# My name is Abdugaffor and there is a small info about me :blush: 
## Full name 
Lutfillaev Abdugaffor

## Contacts :floppy_disk: : 
* __Location__: Russia, Balabanovo
* __telNumber__: 8 900-576-64-55
* __Email__: abdugafforlutfillaev14@gmail.com
* __Github__: [abdugaffor2004](https://github.com/abdugaffor2004)
* __Telegram__: [:telephone_receiver:](https://web.telegram.org/k/)
* __Discord__: [:telephone_receiver:](https://discord.com/channels/@me)


## About me :mag_right: :
I'm a novice web developer that has a purpose: to be a good programmer with strong hard and soft skills. And I will try very hard to achieve this goal. Because one of the my credoes is __"NEVER BACK DOWN"__. 

## Hard Skills :muscle: :
* HTML
* CSS
* Bootstrap
* Javascript
* Git
* React (beginner)
* Redux (beginner)
* Figma

## Code Example :computer: :
```
const Force = (force  , weight, accelaration) => {
    let request = prompt("Введите значение которое хотите найти в формуле: F=m*a")
        
        if (request === 'F' || request ==="f"){
            
            let weight = prompt("Введите значение массы: ")
            let accelaration = prompt("Введите значение ускорения: ")
         
                    alert( "F=" + `${weight}*${accelaration} |`  + ' Ответ: F= ' + weight * accelaration + ' H')
                                 
            }
            
    
        if (request === "m" || request ==="M" ) {
            
            let force = prompt("Введите значение силы: ")
            let accelaration = prompt("Введите значение ускорения: ")
            
            alert( "m=" + `${force}/${accelaration} |`  + ' Ответ: m= ' + force / accelaration + ' кг')
                
            }
            
            
        if (request === "a" || request ==="A")  {
            
            let force = prompt("Введите значение силы: ")
            let weight = prompt("Введите значение массы: ")
            
            alert( "a=" + `${force}/${weight} |`  + ' Ответ: a= ' + force / weight + ' м/с^2')
                
            }
            
            if( request != "F" && request != "f" && request != "A" && request != "a" && request != "M" && request != "m") {alert('ERROR')}
            
            
            return Force
        }
    
     Force()
```
