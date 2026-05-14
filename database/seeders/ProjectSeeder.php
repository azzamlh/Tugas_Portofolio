<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        Project::truncate();

        Project::create([
            'title' => 'Landing Page Minimal',
            'category' => 'Web UI',
            'description' => 'Satu halaman landing page dengan palet coklat hangat dan navigasi scroll.',
            'details' => 'Interaksi halus, desain responsif, dan fokus pada tipografi bersih.',
            'tech' => 'HTML, CSS, JavaScript',
            'url' => null,
        ]);

        Project::create([
            'title' => 'Dashboard Penjualan',
            'category' => 'Dashboard',
            'description' => 'Antarmuka dashboard ringkas untuk ringkasan data dan metrik utama.',
            'details' => 'Tata letak kartu informasi, statistik cepat, dan detail setiap modul.',
            'tech' => 'Laravel, Blade, TailwindCSS',
            'url' => null,
        ]);

        Project::create([
            'title' => 'Portofolio Interaktif',
            'category' => 'Portfolio',
            'description' => 'Halaman portofolio yang menampilkan proyek dan detail secara dinamis.',
            'details' => 'Konten diperbarui dari Laravel untuk menampilkan informasi proyek secara terpusat.',
            'tech' => 'PHP, Laravel, Eloquent',
            'url' => null,
        ]);
    }
}
