const i18Obj = {
    'en': {
      'skills': 'Skills',
      'home': 'Home',
      'about': 'About me',
      'education': 'Education',
      'projects': 'Projects',
      'code': 'Code',
      'name': 'Abdugaffor Lutfillaev',
      'work': ' Web Developer',
      'age': '17 years old, Balabanovo',
      'adInfo1': " Hi, I'm Abdugaffor – Web Developer from Balabanovo. I'm interested in programming and everything connected with it. I'm a novice web developer that has a purpose: to be a good programmer with strong hard and soft skills. And I will try very hard to achieve this goal. Because one of the my credoes is 'NEVER BACK DOWN'.",
      'adInfo2': "I'm studying at course 'Javascript stage 1' in Rolling Scopes. Ready to implement excellent projects with wonderful people.",
      'subCode': 'Task from CodeWars "Can we divide it?"',
      'gameName': 'ticTacToe Game',
    },
    
    'ru': {
      'skills': 'Навыки',
      'home': 'Главная',
      'about': 'Обо мне',
      'education': 'Обучение',
      'projects': 'Проекты',
      'code': 'Код',
      'name': 'Лутфиллаев Абдугаффор',
      'work': ' Веб-разработчик',
      'age': '17 лет, Балабаново',
      'adInfo1': "Привет, я Абдугаффор – веб-разработчик из Балабаново. Я интересуюсь программированием и всем, что с ним связано. Я начинающий веб-разработчик, у которого есть цель: быть хорошим программистом с сильными навыками программирования и программирования. И я буду очень стараться достичь этой цели. Потому что одно из моих кредо - 'НИКОГДА НЕ ОТСТУПАТЬ'.",
      'adInfo2': "Я учусь на курсе 'Javascript stage 1' в Rolling Scopes. Готов реализовывать отличные проекты с замечательными людьми  .",
      'subCode': '"Задача из CodeWars "Можем ли мы разделить это?"',
      'gameName': 'Игра "Крестки нолики"'
}
  }



  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(i18Obj[lang][$(this).attr('key')]);
      });
    });
  });

