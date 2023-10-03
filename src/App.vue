<template>
  <div>
    <p>
      {{ messageStr }}
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      messageStr: "Hello",
    };
  },
  onIdle() {
    this.messageStr = "ZZZ";
  },
  onActive() {
    this.messageStr = "Hello";
  },
};
</script>
