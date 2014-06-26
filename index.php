<?php

//error_reporting(0);
require_once __DIR__ . '/vendor/autoload.php';
$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);
$twig->addExtension(new Twig_Extension_StringLoader());

@$page = $_GET['page'];
@$sub = $_GET['sub'];
@$sub2 = $_GET['sub2'];
@$mod = $_GET['mod'];

if (isset($_GET['page'])) {
    if ($page == 'main') {
        if ($mod == 'slideshow' or $mod == 'pilot-login') {
            echo $twig->render('main.twig', array('page' => $page, 'mod' => $mod));
        } else {
            echo $twig->render('main.twig', array('page' => $page));
        }
    }
    if ($page == 'contacts') {
        echo $twig->render('contacts.twig', array('page' => $page, 'background' => 'img/slides/6.jpg'));
    }
    if ($page == 'search') {
        echo $twig->render('search.twig', array('page' => $page, 'background' => 'img/slides/2.jpg'));
    }
    if ($page == 'about') {
        echo $twig->render('about.twig', array('page' => $page, 'background' => 'img/slides/2.jpg'));
    }
    if ($page == 'user') {
        if ($sub == 'edit') {
            echo $twig->render('sub/user-edit.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } elseif ($sub == 'add-photo') {
            echo $twig->render('sub/user-add-photo.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } elseif ($sub == 'add-video') {
            echo $twig->render('sub/user-add-video.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } elseif ($sub == 'add-news') {
            echo $twig->render('sub/user-add-news.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } elseif ($sub == 'add-miniforum') {
            echo $twig->render('sub/user-add-news.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } elseif ($sub == 'add-place') {
            echo $twig->render('sub/user-add-place.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } elseif ($sub == 'add-event') {
            echo $twig->render('sub/user-add-event.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/9.jpg'));
        } else {
            echo "...";
        }
    }
    if ($page == 'school') {
        if ($sub == 'school-about') {
            echo $twig->render('sub/school-about.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/school.jpg'));
        } elseif ($sub == 'school-programm') {
            echo $twig->render('sub/school-programm.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/1.jpg'));
        } elseif ($sub == 'school-faq') {
            echo $twig->render('sub/school-faq.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/3.jpg'));
        } elseif ($sub == 'school-media') {
            echo $twig->render('sub/school-media.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/4.jpg'));
        } else {
            echo $twig->render('sub/school-about.twig', array('page' => $page, 'sub' => 'school-about', 'background' => 'img/slides/school.jpg'));
        }
    }
    if ($page == 'tandem') {
        if ($mod == 'error') {
            echo $twig->render('tandem.twig', array('page' => $page, 'background' => 'img/slides/tandem.jpg', 'mod' => $mod));
        } else {
            echo $twig->render('tandem.twig', array('page' => $page, 'background' => 'img/slides/tandem.jpg'));
        }
        
    }
    if ($page == 'club') {
        if ($sub == 'club-about') {
            echo $twig->render('sub/club-about.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/club.jpg'));
        } elseif ($sub == 'club-pilots') {
            echo $twig->render('sub/club-pilots.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/1.jpg'));
        } elseif ($sub == 'club-calendar') {
            echo $twig->render('sub/club-calendar.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/2.jpg'));
        } elseif ($sub == 'club-places') {
            echo $twig->render('sub/club-places.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/3.jpg'));
        } elseif ($sub == 'club-rules') {
            echo $twig->render('sub/club-rules.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/4.jpg'));
        } elseif ($sub == 'club-links') {
            echo $twig->render('sub/club-links.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/5.jpg'));
        } else {
            echo $twig->render('sub/club-about.twig', array('page' => $page, 'sub' => 'club-about', 'background' => 'img/slides/club.jpg'));
        }
    }
    if ($page == 'media') {
        if ($sub == 'aerophoto') {
            echo $twig->render('sub/media-aerophoto.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/2.jpg'));
        } elseif ($sub == 'video') {
            echo $twig->render('sub/media-video.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/3.jpg'));
        } else {
            echo $twig->render('sub/media-photo.twig', array('page' => $page, 'sub' => 'photo', 'background' => 'img/slides/8.jpg'));
        }
    }
    if ($page == 'news') {
        if ($sub == 'read') {
            echo $twig->render('sub/news-read.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/1.jpg', 'widegallery' => 1));
        } else {
            echo $twig->render('news.twig', array('page' => $page, 'sub' => 'read', 'background' => 'img/slides/2.jpg', 'widegallery' => 1));
        }
    }
    if ($page == 'shop') {
        echo $twig->render('shop.twig', array('page' => $page));
    }
    if ($page == 'paramotors') {
        if ($sub == 'paramotors-about') {
            echo $twig->render('sub/paramotors-about.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/7.jpg'));
        } elseif ($sub == 'paramotors-programm') {
            echo $twig->render('sub/paramotors-programm.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/1.jpg'));
        } elseif ($sub == 'paramotors-faq') {
            echo $twig->render('sub/paramotors-faq.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/3.jpg'));
        } elseif ($sub == 'paramotors-media') {
            echo $twig->render('sub/paramotors-media.twig', array('page' => $page, 'sub' => $sub, 'background' => 'img/slides/4.jpg'));
        } else {
            echo $twig->render('sub/paramotors-about.twig', array('page' => $page, 'sub' => 'paramotors-about', 'background' => 'img/slides/7.jpg'));
        }
    }
} else {
    echo $twig->render('main.twig', array('page' => 'main'));
}
