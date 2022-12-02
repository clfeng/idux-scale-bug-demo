<template>
    <div class="app-wrapper" :style="appStyle">
        <div>
            <router-link to="/">Go to origin page</router-link>
        </div>
        <div>
            <router-link to="/scale">Go to scale page</router-link>
        </div>
      <IxSpace>
        <IxButton @click="confirmVisible = !confirmVisible">Confirm</IxButton>
        <IxButton @click="infoVisible = !infoVisible">Info</IxButton>
        <IxButton @click="successVisible = !successVisible">Success</IxButton>
        <IxButton @click="warningVisible = !warningVisible">Warning</IxButton>
        <IxButton @click="errorVisible = !errorVisible">Error</IxButton>
      </IxSpace>
      <IxModal v-model:visible="confirmVisible" type="confirm" title="Are you sure delete this task?">
        <p>Some descriptions...</p>
      </IxModal>
      <IxModal v-model:visible="infoVisible" type="info" title="This is a notification message">
        <p>Some messages...</p>
      </IxModal>
      <IxModal v-model:visible="successVisible" type="success" title="This is a success message">
        <p>Some messages...</p>
      </IxModal>
      <IxModal v-model:visible="warningVisible" type="warning" title="This is an warning message">
        <p>Some messages...</p>
      </IxModal>
      <IxModal v-model:visible="errorVisible" type="error" title="This is an error message">
        <p>Some messages...</p>
      </IxModal>
      <div class="popover-wrapper">
        <IxPopover :show-arrow="false" header="Title" content="This is content..." placement="bottomStart">
          <IxButton mode="primary">hover</IxButton>
        </IxPopover>
      </div>
      
    </div>
  </template>
  <style lang="less" scoped>
  .app-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    overflow: hidden;
    background-image: url(../assets/screen_bg.png);
    background-size: cover;
  }
  .popover-wrapper {
    position: absolute;
    left: 880px;
    top: 500px;
  }
  </style>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useResizeObserver } from '@vueuse/core'
  import { IxPopover } from "@idux/components";
  
  const confirmVisible = ref(false);
  const infoVisible = ref(false);
  const successVisible = ref(false);
  const warningVisible = ref(false);
  const errorVisible = ref(false);
  const contentWidth = 960;
  const contentHeight = 540;
  const appStyle = {
    width: `${contentWidth}px`,
    height: `${contentHeight}px`,
  };
  
  const {stop}  = useResizeObserver(document.body.parentElement, updateScale);
  onMounted(() => {
    updateScale();
  });
  onMounted(() => {
    stop();
  })
  
  function updateScale() {
    const bodyEl = document.body;
    const htmlEl = document.body.parentElement;
    if (!bodyEl || !htmlEl) {
      return;
    }
  
    let htmlRect = htmlEl.getBoundingClientRect();
    const pageWidth = htmlRect.width;
    const pageHight = htmlRect.height;
    let widthScale = 1;
    let heightScale = 1;
    if (pageWidth) {
      widthScale = pageWidth / contentWidth;
    }
  
    if (pageHight) {
      heightScale = pageHight / contentHeight;
    }
  
    bodyEl.style.width = `${contentWidth}px`;
    bodyEl.style.height = `${contentHeight}px`;
    bodyEl.style.transform = `scale(${widthScale}, ${heightScale})`;
    bodyEl.style.transformOrigin = `top left`;
  }
  
  </script>
  