// 因为有多个元素拥有panel这个类，因此要使用querySelectorAll而不是querySelector
//querySelectorAll会生成一个NodeList，如果你用console.log()输出panels就会看到，panels的类型为NodeList，同时还包括一些属性。
//如果输入console.log(panels[1]),会输出第一个使用了panel类的整个element
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    // console.log(panel)
    panel.addEventListener("click", ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    // 箭头函数只有一个参数的时候，参数外可以不加括号
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}