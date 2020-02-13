﻿// <auto-generated />
using HaloArmory.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HaloArmory.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200213112941_ItemModelExtended")]
    partial class ItemModelExtended
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("HaloArmory.API.Models.Item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Durability");

                    b.Property<string>("Image");

                    b.Property<string>("Name");

                    b.Property<int>("Price");

                    b.Property<string>("Reviews");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("Items");
                });
#pragma warning restore 612, 618
        }
    }
}