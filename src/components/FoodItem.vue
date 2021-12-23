<template>
  <div>
    <p>The product is {{ name }}</p>
    <p>The Key is {{ key }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: {
    name: String,
    key: Number,
  },
};
</script>
