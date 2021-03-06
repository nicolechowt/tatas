import React from 'react';

import './style/index.css';

const SleepContent = () => {
  return (
    <div className="sleep-content-wrapper">
      <h3 className="sleep-content">The benefits of ZZZs</h3>
      
      <p>Getting enough sleep may not always be at the top of your to-do list. Getting a full night of sleep does more than just make you feel less groggy – it can boost your immune system and help with weight control!</p>

      <h3 className="sleep-content">Surprising Reasons to Get More Sleep</h3>
      <p><b>Sharper Brain</b><br />
      When you're running low on sleep, you'll probably have trouble holding onto and recalling details. That's because sleep plays a big part in both learning and memory. Without enough sleep, it's tough to focus and take in new information. Your brain also doesn't have enough time to properly store memories so you can pull them up later.</p>

      <p>Sleep lets your brain catch up so you're ready for what's next.</p>

      <p><b>Mood Boost</b><br />
      Another thing that your brain does while you sleep is process your emotions. Your mind needs this time in order to recognize and react the right way. When you cut that short, you tend to have more negative emotional reactions and fewer positive ones.</p>

      <p>Chronic lack of sleep can also raise the chance of having a mood disorder. One large study showed that when you have insomnia, you're five times more likely to develop depression, and your odds of anxiety or panic disorders are even greater.</p>

      <p><b>Healthier Heart</b><br />
      While you sleep, your blood pressure goes down, giving your heart and blood vessels a bit of a rest. The less sleep you get, the longer your blood pressure stays up during a 24-hour cycle. High blood pressure can lead to heart disease, including stroke.</p>

      <p>Short-term down time can have long-term payoffs.</p>

      <p><b>Athletic Achievement</b><br />
      If your sport requires quick bursts of energy, like wrestling or weightlifting, sleep loss may not affect you as much as with endurance sports like running, swimming, and biking. But you're not doing yourself any favors.</p>

      <p>Besides robbing you of energy and time for muscle repair, lack of sleep saps your motivation, which is what gets you to the finish line. You'll face a harder mental and physical challenge -- and see slower reaction times.</p>

      <p>Proper rest sets you up for your best performance.</p>

      <p><b>Steadier Blood Sugar</b><br />
      During the deep, slow-wave part of your sleep cycle, the amount of glucose in your blood drops. Not enough time in this deepest stage means you don't get that break to allow a reset -- like leaving the volume turned up. Your body will have a harder time responding to your cells' needs and blood sugar levels</p>

      <p>Allow yourself to reach and remain in this deep sleep, and you're less likely to get type 2 diabetes.</p>

      <p><b>Germ Fighting</b><br />
      To help you ward off illnesses, your immune system identifies harmful bacteria and viruses in your body and destroys them. Ongoing lack of sleep changes the way your immune cells work. They may not attack as quickly, and you could get sick more often.</p>

      <p>Good nightly rest now can help you avoid that tired, worn-out feeling, as well as spending days in bed as your body tries to recover.</p>

      <p><b>Weight Control</b><br />
      When you're well-rested, you're less hungry. Being sleep-deprived messes with the hormones in your brain -- leptin and ghrelin -- that control appetite.</p>

      <p>With those out of balance, your resistance to the temptation of unhealthy foods goes way down. And when you're tired, you're less likely to want to get up and move your body. Together, it's a recipe for putting on pounds.</p>

      <p>The time you spend in bed goes hand-in-hand with the time you spend at the table and at the gym to help you manage your weight.</p>

      <p><b>Too Much of a Good Thing?</b><br />
      Sleep needs vary, but on average, regularly sleeping more than 9 hours a night may do more harm than good. Research found that people who slept longer had more calcium buildup in their heart arteries and less flexible leg arteries, too.</p>

      <p><b>Your best bet is to shoot for 7-8 hours of slumber each night for peak health benefits.</b></p>

      <p className="source">Sourced from <a href="https://www.webmd.com/sleep-disorders/benefits-sleep-more" target="_blank" className="source">WebMD</a></p>
    </div>
  );
}
  
const ExerciseContent = () => {
  return(
    <div className="exercise-content-wrapper">
      <h3 className="exercise-content">Reduce Your Risk of Cancer</h3>
      <p>Regular exercise not only helps you keep a healthy weight, but it can reduce your risk of many types of cancer. </p>

      <p>Some studies have shown a link between weight loss and a lower risk of some types of cancer, such as breast cancer after menopause and endometrial cancer.</p> 

      <p>Excess body weight is thought to be responsible for about 11% of cancers in women and about 5% of cancers in men the United States.</p> 

      <p>A physically active lifestyle may also lower a person's risk of other health problems such as heart disease, high blood pressure, diabetes, and osteoporosis (bone thinning).</p>

      <h3 className="exercise-content">Get that heart rate up</h3>
      <p>Adults should aim for:</p>
      <ul><li>150-300 minutes of moderate intensity</li></ul>
      <p>- or - </p>
      <ul><li>75-150 minutes of vigorous intensity activity each week</li></ul>

      <p><b>Getting to or exceeding the upper limit of 300 minutes is ideal.</b></p>

      <h3 className="exercise-content">Limiting time spent sitting</h3>
      <p>There is growing evidence that the amount of time spent sitting is important, regardless of your activity level. Sitting time raises the risks of obesity, type 2 diabetes, heart disease, and some types of cancer, as well as of dying at a younger age.</p>

      <p>Lifestyle changes and advances in technology have led to people being less active and spending more time sitting each day. This is true both in the workplace and at home, due to increased TV, computer, and other screen time. Limiting the amount of time spent sitting, as suggested in the table below, may help maintain a healthy body weight and reduce the risk of certain cancers.</p>

      <p className="source">Adapted from the <a href="https://www.cancer.org/healthy/eat-healthy-get-active/acs-guidelines-nutrition-physical-activity-cancer-prevention/guidelines.html" target="_blank">American Cancer Society</a></p>
    </div>
  );
}

const MindfulnessContent = () => {
  return(
    <div className="mindfulness-content-wrapper">
      <h3 className="mindfulness-content">The benefits of pausing for just a moment</h3>
      <p>Adding a practice of mindfulness can increase your concentration, reduce anxiety and stress, help you sleep better and even improve your eating habits.</p> 

      <p>Check out the next to sections for tips on how to get started. </p>
    </div>
  );
}

const BreastHealthContent = () => {
  return(
    <div className="breasthealth-content-wrapper">
      <h3 className="breasthealth-content">Take control of your health</h3>
      <p>Many factors over the course of a lifetime can influence your breast cancer risk. You can’t change some factors, such as getting older or your family history, but you can help lower your risk of breast cancer by taking care of your health in the following ways —</p>

      <ul>
        <li>Keep a healthy weight.</li>
        <li>Exercise regularly.</li>
        <li>Don’t drink alcohol, or limit alcoholic drinks.</li>
        <li>If you are taking, or have been told to take, hormone replacement therapyexternal icon or oral contraceptivesexternal icon (birth control pills), ask your doctor about the risks and find out if it is right for you.</li>
        <li>Breastfeed your children, if possible.</li>
        <li>If you have a family history of breast cancer or inherited changes in your BRCA1 and BRCA2 genes, talk to your doctor about other ways to lower your risk.</li>
      </ul>

      <p>Staying healthy throughout your life will lower your risk of developing cancer, and improve your chances of surviving cancer if it occurs.</p>

      <p className="source">Source: Center for <a href="https://www.cdc.gov/cancer/breast/basic_info/prevention.htm" target="_blank">Disease Control and Prevention</a></p>

      <h3 className="breasthealth-content">Get to know your boobs</h3>
      <p>You can raise your chances of finding breast cancer early - when the treatment options and outcomes are much better – by performing monthly self checks. Know hoe your breasts normally look and feel and talk to your health care provider right away if you notice any changes in the size or shape. We’ll walk you through the process in the next section.</p>

      <p className="source">Source: Center for <a href="https://www.cdc.gov/cancer/breast/young_women/bringyourbrave/take_action/healthy_behaviors.htm" target="_blank">Disease Control and Prevention</a></p>

      <p>Unsure about what to expect? Check our our Mammogram section for more info.</p>
    </div>
  );
}

const HealthyEatingContent = () => {
  return(
    <div className="healthy-content-wrapper">
      <h3 className="healthy-content">It’s more than losing weight</h3>
      <p>A balaned diet with protein, vegetables, and fruit not only helps you maintain a healthy weight, but provides your body the nutrients it needs to boost your immune system, energy level, and reduce your cancer risk.</p>

      <h3 className="healthy-content">What is healthy eating?</h3>
      <p>While we only track fruits, veggies, and water, the American Cancer Society recommends we aim for the following:</p>

      <ul>
        <li>Food high in nutrients</li>
        <li>A variety of veggies – dark green, red, and orange</li>
        <li>Fiber-rich legumes - peas and beans</li>
        <li>Fruits in a variety of colors</li>
        <li>Whole grains</li>
      </ul>

      <h3 className="healthy-content">US Dietary Guidelines dialy recommendations</h3>
      <ul>	
        <li>2 1/2 to 3 cups of veggies</li>
        <li>1 1/2 to 2 cups of fruit</li>
      </ul>

      <h3 className="healthy-content">What to limit or avoid</h3>
      <ul>
        <li>Red or processed meats</li>
        <li>Beverages with added sugars</li>
        <li>Highly processed foods, including refined grains and “fast foods”</li>
        <li>Alcohol, limit to 1 drink a day for women and 2 for men</li>
      </ul>

      <p>Check our tips and additional resources dive deeper into healthy eating.</p> 
    </div>
  );
}
function LibraryIntro(props){
  return(
    <div className="library-intro">
      {(()=> {
        if(props.name==='SLEEP'){
          return(
            <div>
              <SleepContent />
            </div>
          );  
        } 
      
        if(props.name==='EXERCISE'){
          return (
            <ExerciseContent />
          )
        }

        if(props.name==='MINDFULNESS'){
          return (
            <MindfulnessContent />
          )
        }

        if(props.name==='BREAST HEALTH'){
          return (
            <BreastHealthContent />
          )
        }

        if(props.name==='HEALTHY EATING'){
          return (
            <HealthyEatingContent />
          )
        }
      })()}
    </div>
  )
}

export default(LibraryIntro)