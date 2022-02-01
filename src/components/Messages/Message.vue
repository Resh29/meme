<template>
  <teleport to="body">
    <transition-group tag="span">
      <transition name="fade" key="message-fade">
        <div v-if="messages.length" class="message-container">
          <div
            class="message"
            v-for="message of messages"
            :key="message.id"
            :class="message.type.toLowerCase()"
          >
            <h4 class="message__text">
              {{ message.text }}
            </h4>
          </div>
        </div>
      </transition>
    </transition-group>
  </teleport>
</template>

<script>
import './messages.css';
import { mapState } from 'vuex';
export default {
  name: 'Message',
  computed: mapState({
    messages: (state) => state.messages.messages,
  }),
};
</script>

<style></style>
