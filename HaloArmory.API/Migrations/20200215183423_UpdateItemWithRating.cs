using Microsoft.EntityFrameworkCore.Migrations;

namespace HaloArmory.API.Migrations
{
    public partial class UpdateItemWithRating : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Rating",
                table: "Items",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Items");
        }
    }
}
