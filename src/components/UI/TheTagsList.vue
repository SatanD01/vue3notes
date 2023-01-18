<template>
  <div class="tags-list">
    <div class="tag-item" v-for="tag in items" :key="tag" @click="$emit('onItemClick', tag)"
         :class="{isPreview: isPreview}">
      <span>
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTagsList",
  props: {
    items: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}

.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: white;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;

  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;

    &:before {
      content: '#';
    }
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>