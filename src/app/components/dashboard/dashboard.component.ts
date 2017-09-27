import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../core/store/app-store';
import { QuestionActions, GameActions } from '../../core/store/actions';
import { Category, Question, SearchResults, Game } from '../../model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './dashboard.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  categoriesObs: Observable<Category[]>;
  categoryDictObs: Observable<{[key: number] :Category}>;
  tagsObs: Observable<string[]>;
  questionsSearchResultsObs: Observable<SearchResults>;
  questionOfTheDayObs: Observable<Question>;
  activeGamesObs: Observable<Game[]>;
  gameInvites: number[];  //change this to game invites
  
  constructor(private store: Store<AppStore>,
              private questionActions: QuestionActions,
              private gameActions: GameActions) {
    this.categoriesObs = store.select(s => s.categories);
    this.categoryDictObs = store.select(s => s.categoryDictionary);
    this.tagsObs = store.select(s => s.tags);
    this.questionsSearchResultsObs = store.select(s => s.questionsSearchResults);
    this.questionOfTheDayObs = store.select(s => s.questionOfTheDay);
    this.activeGamesObs = store.select(s => s.activeGames);
    this.gameInvites = [1,2,3];
  }

  ngOnInit() {
    this.store.dispatch(this.questionActions.getQuestionOfTheDay());
  }

  ngOnDestroy() {
  }
}
