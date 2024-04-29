import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-whystarreg',
  templateUrl: './whystarreg.component.html',
  styleUrl: './whystarreg.component.css',
  standalone:true,
  imports:[CommonModule,FooterComponent]
})
export class WhystarregComponent {
  showAnswer = false;
  currentQuestion: string = '';

  toggleAnswer(questionId: string) {
    if (this.currentQuestion === questionId) {
      this.showAnswer = !this.showAnswer;
    } else {
      this.currentQuestion = questionId;
      this.showAnswer = true;
    }
}

}
