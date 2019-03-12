<template>
  <b-form-group
    class="base-form-group px-2"
    :label="label"
    label-class="pb-0 text-uppercase text-info fontsize-12"
  >
    <b-form-input
      v-bind="$attrs"
      class="base-form-input"
      v-model="localValue"
      :placeholder="placeholder"
      :type="type"
    />
  </b-form-group>
</template>

<script>
export default {
  name: 'BaseInput',

  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },

    label: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    }
  },

  data () {
    return {}
  },

  computed: {
    localValue: {
      get () {
        return this.value
      },

      set (val) {
        this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form-input {
  &::placeholder {
    font-size: 12px;
    text-align: center;
    letter-spacing: 1px;

    @include media-breakpoint-up(md) {
      font-size: 13px;
      text-align: left;
    }
  }
}
</style>
