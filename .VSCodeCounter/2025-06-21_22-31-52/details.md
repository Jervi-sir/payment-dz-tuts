# Details

Date : 2025-06-21 22:31:52

Directory c:\\Users\\Jervi\\Desktop\\payment-with-laravel

Total : 140 files,  23239 codes, 932 comments, 1093 blanks, all 25264 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.github/workflows/lint.yml](/.github/workflows/lint.yml) | YAML | 31 | 5 | 10 | 46 |
| [.github/workflows/tests.yml](/.github/workflows/tests.yml) | YAML | 39 | 0 | 12 | 51 |
| [app/Http/Controllers/Auth/AuthenticatedSessionController.php](/app/Http/Controllers/Auth/AuthenticatedSessionController.php) | PHP | 33 | 9 | 10 | 52 |
| [app/Http/Controllers/Auth/ConfirmablePasswordController.php](/app/Http/Controllers/Auth/ConfirmablePasswordController.php) | PHP | 29 | 6 | 7 | 42 |
| [app/Http/Controllers/Auth/EmailVerificationNotificationController.php](/app/Http/Controllers/Auth/EmailVerificationNotificationController.php) | PHP | 16 | 3 | 6 | 25 |
| [app/Http/Controllers/Auth/EmailVerificationPromptController.php](/app/Http/Controllers/Auth/EmailVerificationPromptController.php) | PHP | 16 | 3 | 4 | 23 |
| [app/Http/Controllers/Auth/NewPasswordController.php](/app/Http/Controllers/Auth/NewPasswordController.php) | PHP | 47 | 14 | 9 | 70 |
| [app/Http/Controllers/Auth/PasswordResetLinkController.php](/app/Http/Controllers/Auth/PasswordResetLinkController.php) | PHP | 27 | 8 | 7 | 42 |
| [app/Http/Controllers/Auth/RegisteredUserController.php](/app/Http/Controllers/Auth/RegisteredUserController.php) | PHP | 35 | 8 | 9 | 52 |
| [app/Http/Controllers/Auth/VerifyEmailController.php](/app/Http/Controllers/Auth/VerifyEmailController.php) | PHP | 20 | 4 | 7 | 31 |
| [app/Http/Controllers/Controller.php](/app/Http/Controllers/Controller.php) | PHP | 5 | 1 | 3 | 9 |
| [app/Http/Controllers/Settings/PasswordController.php](/app/Http/Controllers/Settings/PasswordController.php) | PHP | 27 | 6 | 7 | 40 |
| [app/Http/Controllers/Settings/ProfileController.php](/app/Http/Controllers/Settings/ProfileController.php) | PHP | 41 | 9 | 14 | 64 |
| [app/Http/Middleware/HandleAppearance.php](/app/Http/Middleware/HandleAppearance.php) | PHP | 14 | 5 | 5 | 24 |
| [app/Http/Middleware/HandleInertiaRequests.php](/app/Http/Middleware/HandleInertiaRequests.php) | PHP | 31 | 19 | 7 | 57 |
| [app/Http/Requests/Auth/LoginRequest.php](/app/Http/Requests/Auth/LoginRequest.php) | PHP | 51 | 21 | 14 | 86 |
| [app/Http/Requests/Settings/ProfileUpdateRequest.php](/app/Http/Requests/Settings/ProfileUpdateRequest.php) | PHP | 23 | 5 | 5 | 33 |
| [app/Models/User.php](/app/Models/User.php) | PHP | 25 | 17 | 7 | 49 |
| [app/Providers/AppServiceProvider.php](/app/Providers/AppServiceProvider.php) | PHP | 12 | 8 | 5 | 25 |
| [bootstrap/app.php](/bootstrap/app.php) | PHP | 23 | 1 | 4 | 28 |
| [bootstrap/providers.php](/bootstrap/providers.php) | PHP | 4 | 0 | 2 | 6 |
| [components.json](/components.json) | JSON | 21 | 0 | 1 | 22 |
| [composer.json](/composer.json) | JSON | 86 | 0 | 0 | 86 |
| [composer.lock](/composer.lock) | JSON | 9,174 | 0 | 1 | 9,175 |
| [config/app.php](/config/app.php) | PHP | 22 | 82 | 23 | 127 |
| [config/auth.php](/config/auth.php) | PHP | 28 | 74 | 14 | 116 |
| [config/cache.php](/config/cache.php) | PHP | 57 | 34 | 18 | 109 |
| [config/database.php](/config/database.php) | PHP | 109 | 43 | 23 | 175 |
| [config/filesystems.php](/config/filesystems.php) | PHP | 36 | 32 | 13 | 81 |
| [config/inertia.php](/config/inertia.php) | PHP | 21 | 23 | 12 | 56 |
| [config/logging.php](/config/logging.php) | PHP | 79 | 33 | 21 | 133 |
| [config/mail.php](/config/mail.php) | PHP | 55 | 43 | 19 | 117 |
| [config/queue.php](/config/queue.php) | PHP | 52 | 44 | 17 | 113 |
| [config/services.php](/config/services.php) | PHP | 20 | 11 | 8 | 39 |
| [config/session.php](/config/session.php) | PHP | 23 | 160 | 35 | 218 |
| [database/factories/UserFactory.php](/database/factories/UserFactory.php) | PHP | 25 | 14 | 6 | 45 |
| [database/migrations/0001\_01\_01\_000000\_create\_users\_table.php](/database/migrations/0001_01_01_000000_create_users_table.php) | PHP | 38 | 6 | 6 | 50 |
| [database/migrations/0001\_01\_01\_000001\_create\_cache\_table.php](/database/migrations/0001_01_01_000001_create_cache_table.php) | PHP | 25 | 6 | 5 | 36 |
| [database/migrations/0001\_01\_01\_000002\_create\_jobs\_table.php](/database/migrations/0001_01_01_000002_create_jobs_table.php) | PHP | 46 | 6 | 6 | 58 |
| [database/seeders/DatabaseSeeder.php](/database/seeders/DatabaseSeeder.php) | PHP | 14 | 5 | 5 | 24 |
| [eslint.config.js](/eslint.config.js) | JavaScript | 42 | 1 | 2 | 45 |
| [package-lock.json](/package-lock.json) | JSON | 7,326 | 0 | 1 | 7,327 |
| [package.json](/package.json) | JSON | 64 | 0 | 1 | 65 |
| [phpunit.xml](/phpunit.xml) | XML | 33 | 0 | 1 | 34 |
| [public/favicon.svg](/public/favicon.svg) | XML | 3 | 0 | 1 | 4 |
| [public/index.php](/public/index.php) | PHP | 10 | 4 | 7 | 21 |
| [public/logo.svg](/public/logo.svg) | XML | 16 | 0 | 1 | 17 |
| [resources/css/app.css](/resources/css/app.css) | PostCSS | 130 | 8 | 22 | 160 |
| [resources/js/app.tsx](/resources/js/app.tsx) | TypeScript JSX | 18 | 1 | 6 | 25 |
| [resources/js/components/app-content.tsx](/resources/js/components/app-content.tsx) | TypeScript JSX | 15 | 0 | 4 | 19 |
| [resources/js/components/app-header.tsx](/resources/js/components/app-header.tsx) | TypeScript JSX | 171 | 2 | 10 | 183 |
| [resources/js/components/app-logo-icon.tsx](/resources/js/components/app-logo-icon.tsx) | TypeScript JSX | 12 | 0 | 2 | 14 |
| [resources/js/components/app-logo.tsx](/resources/js/components/app-logo.tsx) | TypeScript JSX | 13 | 0 | 2 | 15 |
| [resources/js/components/app-shell.tsx](/resources/js/components/app-shell.tsx) | TypeScript JSX | 14 | 0 | 5 | 19 |
| [resources/js/components/app-sidebar-header.tsx](/resources/js/components/app-sidebar-header.tsx) | TypeScript JSX | 13 | 0 | 2 | 15 |
| [resources/js/components/app-sidebar.tsx](/resources/js/components/app-sidebar.tsx) | TypeScript JSX | 51 | 0 | 6 | 57 |
| [resources/js/components/appearance-dropdown.tsx](/resources/js/components/appearance-dropdown.tsx) | TypeScript JSX | 50 | 0 | 4 | 54 |
| [resources/js/components/appearance-tabs.tsx](/resources/js/components/appearance-tabs.tsx) | TypeScript JSX | 31 | 0 | 4 | 35 |
| [resources/js/components/breadcrumbs.tsx](/resources/js/components/breadcrumbs.tsx) | TypeScript JSX | 33 | 0 | 2 | 35 |
| [resources/js/components/delete-user.tsx](/resources/js/components/delete-user.tsx) | TypeScript JSX | 76 | 0 | 14 | 90 |
| [resources/js/components/heading-small.tsx](/resources/js/components/heading-small.tsx) | TypeScript JSX | 8 | 0 | 1 | 9 |
| [resources/js/components/heading.tsx](/resources/js/components/heading.tsx) | TypeScript JSX | 8 | 0 | 1 | 9 |
| [resources/js/components/icon.tsx](/resources/js/components/icon.tsx) | TypeScript JSX | 9 | 0 | 3 | 12 |
| [resources/js/components/input-error.tsx](/resources/js/components/input-error.tsx) | TypeScript JSX | 9 | 0 | 2 | 11 |
| [resources/js/components/nav-footer.tsx](/resources/js/components/nav-footer.tsx) | TypeScript JSX | 33 | 0 | 2 | 35 |
| [resources/js/components/nav-main.tsx](/resources/js/components/nav-main.tsx) | TypeScript JSX | 23 | 0 | 2 | 25 |
| [resources/js/components/nav-user.tsx](/resources/js/components/nav-user.tsx) | TypeScript JSX | 34 | 0 | 3 | 37 |
| [resources/js/components/text-link.tsx](/resources/js/components/text-link.tsx) | TypeScript JSX | 17 | 0 | 3 | 20 |
| [resources/js/components/ui/alert.tsx](/resources/js/components/ui/alert.tsx) | TypeScript JSX | 60 | 0 | 7 | 67 |
| [resources/js/components/ui/avatar.tsx](/resources/js/components/ui/avatar.tsx) | TypeScript JSX | 46 | 0 | 6 | 52 |
| [resources/js/components/ui/badge.tsx](/resources/js/components/ui/badge.tsx) | TypeScript JSX | 41 | 0 | 6 | 47 |
| [resources/js/components/ui/breadcrumb.tsx](/resources/js/components/ui/breadcrumb.tsx) | TypeScript JSX | 99 | 0 | 11 | 110 |
| [resources/js/components/ui/button.tsx](/resources/js/components/ui/button.tsx) | TypeScript JSX | 53 | 0 | 6 | 59 |
| [resources/js/components/ui/card.tsx](/resources/js/components/ui/card.tsx) | TypeScript JSX | 60 | 0 | 9 | 69 |
| [resources/js/components/ui/checkbox.tsx](/resources/js/components/ui/checkbox.tsx) | TypeScript JSX | 27 | 0 | 4 | 31 |
| [resources/js/components/ui/collapsible.tsx](/resources/js/components/ui/collapsible.tsx) | TypeScript JSX | 27 | 0 | 5 | 32 |
| [resources/js/components/ui/dialog.tsx](/resources/js/components/ui/dialog.tsx) | TypeScript JSX | 121 | 0 | 13 | 134 |
| [resources/js/components/ui/dropdown-menu.tsx](/resources/js/components/ui/dropdown-menu.tsx) | TypeScript JSX | 238 | 0 | 18 | 256 |
| [resources/js/components/ui/icon.tsx](/resources/js/components/ui/icon.tsx) | TypeScript JSX | 11 | 0 | 4 | 15 |
| [resources/js/components/ui/input.tsx](/resources/js/components/ui/input.tsx) | TypeScript JSX | 18 | 0 | 4 | 22 |
| [resources/js/components/ui/label.tsx](/resources/js/components/ui/label.tsx) | TypeScript JSX | 19 | 0 | 4 | 23 |
| [resources/js/components/ui/navigation-menu.tsx](/resources/js/components/ui/navigation-menu.tsx) | TypeScript JSX | 157 | 0 | 12 | 169 |
| [resources/js/components/ui/placeholder-pattern.tsx](/resources/js/components/ui/placeholder-pattern.tsx) | TypeScript JSX | 17 | 0 | 4 | 21 |
| [resources/js/components/ui/select.tsx](/resources/js/components/ui/select.tsx) | TypeScript JSX | 167 | 0 | 13 | 180 |
| [resources/js/components/ui/separator.tsx](/resources/js/components/ui/separator.tsx) | TypeScript JSX | 23 | 0 | 4 | 27 |
| [resources/js/components/ui/sheet.tsx](/resources/js/components/ui/sheet.tsx) | TypeScript JSX | 125 | 0 | 13 | 138 |
| [resources/js/components/ui/sidebar.tsx](/resources/js/components/ui/sidebar.tsx) | TypeScript JSX | 656 | 12 | 54 | 722 |
| [resources/js/components/ui/skeleton.tsx](/resources/js/components/ui/skeleton.tsx) | TypeScript JSX | 11 | 0 | 3 | 14 |
| [resources/js/components/ui/toggle-group.tsx](/resources/js/components/ui/toggle-group.tsx) | TypeScript JSX | 65 | 0 | 7 | 72 |
| [resources/js/components/ui/toggle.tsx](/resources/js/components/ui/toggle.tsx) | TypeScript JSX | 41 | 0 | 5 | 46 |
| [resources/js/components/ui/tooltip.tsx](/resources/js/components/ui/tooltip.tsx) | TypeScript JSX | 53 | 0 | 7 | 60 |
| [resources/js/components/user-info.tsx](/resources/js/components/user-info.tsx) | TypeScript JSX | 20 | 0 | 3 | 23 |
| [resources/js/components/user-menu-content.tsx](/resources/js/components/user-menu-content.tsx) | TypeScript JSX | 41 | 0 | 5 | 46 |
| [resources/js/hooks/use-appearance.tsx](/resources/js/hooks/use-appearance.tsx) | TypeScript JSX | 49 | 3 | 22 | 74 |
| [resources/js/hooks/use-initials.tsx](/resources/js/hooks/use-initials.tsx) | TypeScript JSX | 11 | 0 | 5 | 16 |
| [resources/js/hooks/use-mobile-navigation.ts](/resources/js/hooks/use-mobile-navigation.ts) | TypeScript | 6 | 1 | 2 | 9 |
| [resources/js/hooks/use-mobile.tsx](/resources/js/hooks/use-mobile.tsx) | TypeScript JSX | 15 | 0 | 8 | 23 |
| [resources/js/layouts/app-layout.tsx](/resources/js/layouts/app-layout.tsx) | TypeScript JSX | 12 | 0 | 3 | 15 |
| [resources/js/layouts/app/app-header-layout.tsx](/resources/js/layouts/app/app-header-layout.tsx) | TypeScript JSX | 13 | 0 | 2 | 15 |
| [resources/js/layouts/app/app-sidebar-layout.tsx](/resources/js/layouts/app/app-sidebar-layout.tsx) | TypeScript JSX | 17 | 0 | 2 | 19 |
| [resources/js/layouts/auth-layout.tsx](/resources/js/layouts/auth-layout.tsx) | TypeScript JSX | 8 | 0 | 2 | 10 |
| [resources/js/layouts/auth/auth-card-layout.tsx](/resources/js/layouts/auth/auth-card-layout.tsx) | TypeScript JSX | 34 | 0 | 3 | 37 |
| [resources/js/layouts/auth/auth-simple-layout.tsx](/resources/js/layouts/auth/auth-simple-layout.tsx) | TypeScript JSX | 31 | 0 | 4 | 35 |
| [resources/js/layouts/auth/auth-split-layout.tsx](/resources/js/layouts/auth/auth-split-layout.tsx) | TypeScript JSX | 42 | 0 | 4 | 46 |
| [resources/js/layouts/settings/layout.tsx](/resources/js/layouts/settings/layout.tsx) | TypeScript JSX | 60 | 1 | 8 | 69 |
| [resources/js/lib/utils.ts](/resources/js/lib/utils.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [resources/js/pages/auth/confirm-password.tsx](/resources/js/pages/auth/confirm-password.tsx) | TypeScript JSX | 51 | 1 | 9 | 61 |
| [resources/js/pages/auth/forgot-password.tsx](/resources/js/pages/auth/forgot-password.tsx) | TypeScript JSX | 52 | 1 | 11 | 64 |
| [resources/js/pages/auth/login.tsx](/resources/js/pages/auth/login.tsx) | TypeScript JSX | 98 | 0 | 13 | 111 |
| [resources/js/pages/auth/register.tsx](/resources/js/pages/auth/register.tsx) | TypeScript JSX | 109 | 0 | 11 | 120 |
| [resources/js/pages/auth/reset-password.tsx](/resources/js/pages/auth/reset-password.tsx) | TypeScript JSX | 88 | 0 | 11 | 99 |
| [resources/js/pages/auth/verify-email.tsx](/resources/js/pages/auth/verify-email.tsx) | TypeScript JSX | 32 | 1 | 9 | 42 |
| [resources/js/pages/dashboard.tsx](/resources/js/pages/dashboard.tsx) | TypeScript JSX | 33 | 0 | 3 | 36 |
| [resources/js/pages/settings/appearance.tsx](/resources/js/pages/settings/appearance.tsx) | TypeScript JSX | 25 | 0 | 6 | 31 |
| [resources/js/pages/settings/password.tsx](/resources/js/pages/settings/password.tsx) | TypeScript JSX | 108 | 0 | 21 | 129 |
| [resources/js/pages/settings/profile.tsx](/resources/js/pages/settings/profile.tsx) | TypeScript JSX | 107 | 0 | 21 | 128 |
| [resources/js/pages/welcome.tsx](/resources/js/pages/welcome.tsx) | TypeScript JSX | 788 | 1 | 3 | 792 |
| [resources/js/ssr.tsx](/resources/js/ssr.tsx) | TypeScript JSX | 22 | 5 | 4 | 31 |
| [resources/js/types/global.d.ts](/resources/js/types/global.d.ts) | TypeScript | 4 | 0 | 2 | 6 |
| [resources/js/types/index.d.ts](/resources/js/types/index.d.ts) | TypeScript | 37 | 0 | 7 | 44 |
| [resources/js/types/vite-env.d.ts](/resources/js/types/vite-env.d.ts) | TypeScript | 0 | 1 | 1 | 2 |
| [resources/views/app.blade.php](/resources/views/app.blade.php) | PHP | 41 | 0 | 10 | 51 |
| [routes/auth.php](/routes/auth.php) | PHP | 41 | 0 | 16 | 57 |
| [routes/console.php](/routes/console.php) | PHP | 6 | 0 | 3 | 9 |
| [routes/settings.php](/routes/settings.php) | PHP | 16 | 0 | 6 | 22 |
| [routes/web.php](/routes/web.php) | PHP | 13 | 0 | 5 | 18 |
| [tests/Feature/Auth/AuthenticationTest.php](/tests/Feature/Auth/AuthenticationTest.php) | PHP | 30 | 0 | 13 | 43 |
| [tests/Feature/Auth/EmailVerificationTest.php](/tests/Feature/Auth/EmailVerificationTest.php) | PHP | 34 | 0 | 14 | 48 |
| [tests/Feature/Auth/PasswordConfirmationTest.php](/tests/Feature/Auth/PasswordConfirmationTest.php) | PHP | 23 | 0 | 11 | 34 |
| [tests/Feature/Auth/PasswordResetTest.php](/tests/Feature/Auth/PasswordResetTest.php) | PHP | 42 | 0 | 20 | 62 |
| [tests/Feature/Auth/RegistrationTest.php](/tests/Feature/Auth/RegistrationTest.php) | PHP | 16 | 0 | 5 | 21 |
| [tests/Feature/DashboardTest.php](/tests/Feature/DashboardTest.php) | PHP | 10 | 0 | 5 | 15 |
| [tests/Feature/ExampleTest.php](/tests/Feature/ExampleTest.php) | PHP | 5 | 0 | 3 | 8 |
| [tests/Feature/Settings/PasswordUpdateTest.php](/tests/Feature/Settings/PasswordUpdateTest.php) | PHP | 33 | 0 | 9 | 42 |
| [tests/Feature/Settings/ProfileUpdateTest.php](/tests/Feature/Settings/ProfileUpdateTest.php) | PHP | 65 | 0 | 22 | 87 |
| [tests/Pest.php](/tests/Pest.php) | PHP | 9 | 32 | 7 | 48 |
| [tests/TestCase.php](/tests/TestCase.php) | PHP | 6 | 1 | 4 | 11 |
| [tests/Unit/ExampleTest.php](/tests/Unit/ExampleTest.php) | PHP | 4 | 0 | 2 | 6 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 26 | 88 | 9 | 123 |
| [vite.config.ts](/vite.config.ts) | TypeScript | 24 | 0 | 2 | 26 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)