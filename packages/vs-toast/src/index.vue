<template>
    <div class="root" ref="root">
        <div class="toast" ref="toast"> 
            <slot>This is a toast component.</slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'VsToast',
    props: ['width', 'height', 'bgColor', 'color', 'time', 'pos', 'fontSize'],
    data() {
        return {}
    },
    mounted() {
        let root = this.$refs.root
        if(this.width) root.style.setProperty('--width', this.width)
        if(this.height) root.style.setProperty('--height', this.height)
        if(this.bgColor) root.style.setProperty('--bg-color', this.bgColor)
        if(this.color) root.style.setProperty('--color', this.color)
        if(this.fontSize) root.style.setProperty('--font-size', this.fontSize)
        if(this.time) root.style.setProperty('--time', this.time)
        
        let flashPos = this.pos ? this.pos : ['mid']
        let toast = this.$refs.toast
        if(!flashPos[0] || flashPos[0]==='mid') {
            toast.style.top = '0'
            toast.setAttribute('class', 'toast flashMid');
        } else if (flashPos[0]==='top') {
            toast.style.top = '0'
            root.style.setProperty('--top', flashPos[1])
            toast.setAttribute('class', 'toast flashTop');
        } else if (flashPos[0]==='bottom') {
            toast.style.bottom = '0'
            root.style.setProperty('--bottom', flashPos[1])
            toast.setAttribute('class', 'toast flashBottom');
        }
        root.style.setProperty('--pos', this.width)
        toast.addEventListener('animationend', ()=>{
            toast.style.display = 'none'
        })
    },
}
</script>


<style scoped>
.root {
    --width: 600px;
    --height: 200px;
    --bg-color: black;
    --color: white;
    --font-size: 24px;
    --time: 2.5s;
    --top: 200px;
    --bottom: 240px;
    --opacity: 0.75;
}
.toast {
    width: var(--width);
    height: var(--height);
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size);
    background-color: var(--bg-color);
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    border-radius: calc(var(--height) * 0.25);
    opacity: 0;
}
.flashTop {
    top: 0;
    animation: flashTop var(--time);
}
.flashMid {
    top: 0;
    animation: flashMid var(--time);
}
.flashBottom {
    bottom: 0;
    animation: flashBottom var(--time);
}
@keyframes flashTop {
    20% {
        opacity: var(--opacity);
        top: var(--top);
    }
    80% {
        opacity: var(--opacity);
    }
    100% {
        top: var(--top);  
    }
}
@keyframes flashMid {
    0% {
        top: 0;
    }
    20% {
        opacity: var(--opacity);
        top: 50%;
        transform: translate(-50%,-50%);
    }
    80% {
        opacity: var(--opacity);
    }
    100% {
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
@keyframes flashBottom {
    20% {
        opacity: var(--opacity);
        bottom: var(--bottom);
    }
    80% {
        opacity: var(--opacity);
        bottom: var(--bottom);
    }
    100% {
        bottom: 0%;  
    }
}
</style>