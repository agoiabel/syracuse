const menu = type =>  {
    const navigation = document.getElementById('navigation');

    if (navigation.classList.contains('show')) {
        navigation.classList.remove('show');
        navigation.classList.add('hide');
    } else {
        navigation.classList.remove('hide');
        navigation.classList.add('show');
    }

}
