class FollowToggle { 
  // turns a button into a toggle that will follow/unfollow a user.
  constructor(ele){
    this.$ele = $(ele);
    // this.button = $('.follow-toggle');
    // console.log(this.$ele.data('userid'));
    this.userId = this.$ele.data('userid');
    this.followState = this.$ele.data('followstate');
    this.render();
  }

  render(){
    if (this.followState === 'unfollowed'){
      this.$ele.text('Follow!');
    } else {
      this.$ele.text('Unfollow!');
    }
  }

}

module.exports = FollowToggle;