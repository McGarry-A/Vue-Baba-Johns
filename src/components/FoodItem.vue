<template>
  <div>
    <h1>The section name is {{ sectionName }}</h1>
    <h1>
      The product section we're looking for is {{ products[sectionName][0] }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    sectionName: String,
    products: Object,
  },
  data: function () {
    return {};
  },
};
</script>
