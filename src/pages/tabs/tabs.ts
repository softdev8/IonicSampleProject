import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
import { Messages } from '../messages/messages';
import { Feed } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Feed;
  tab2Root = Messages;
  tab3Root = Profile;

  constructor() {

  }
}
